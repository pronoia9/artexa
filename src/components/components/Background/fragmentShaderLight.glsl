uniform float uTime;
uniform vec2 uResolution;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;

const int AMOUNT = 2;
const float scale = 2.0;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}
float createLen() {
  float time = 10.0 + uTime / 1.0;
  vec2 coord = scale * (gl_FragCoord.xy - vec2(0.0, uResolution.y)) / min(uResolution.y, uResolution.x);
  float len;
  for(int i = 0; i < AMOUNT; i++) {
    len = length(vec2(coord.x, coord.y));
    coord.x = coord.x + cos(coord.y - sin(len)) - cos(time / 9.1);
    coord.y = coord.y + sin(coord.y + cos(len)) + sin(time / 12.0);
  }
  return len;
}
float createLen4(float x, float y, float speed, float offset) {
  float time = offset + uTime / speed;
  // vec2 coord = scale * (gl_FragCoord.xy - uResolution.xy) / min(uResolution.y, uResolution.x);
  vec2 coord = scale * (gl_FragCoord.xy - vec2(0.0, uResolution.y)) / min(uResolution.y, uResolution.x);
  float len;
  for(int i = 0; i < AMOUNT; i++) {
    len = length(vec2(coord.x, coord.y));
    coord.x = coord.x - cos(coord.y + sin(len)) + cos(time / x);
    // coord.y = coord.y + sin(coord.y + cos(len)) + sin(time / y);
  }
  return len;
}
vec3 createCircle(vec2 position, vec3 color, float size, float blur) {
  // vec2 pos = (gl_FragCoord.xy - uResolution.xy) / min(uResolution.y, uResolution.x) - position;
  vec2 pos = (gl_FragCoord.xy - vec2(0.0, uResolution.y)) / min(uResolution.y, uResolution.x) - position;
  float circle = sqrt(pow(pos.x, 3.0) + pow(pos.y, 2.0));
  circle = smoothstep(size, size + blur, 1.0 - circle);
  return color * circle;
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 sourceOver(vec3 sourceColor, vec3 destinationColor, float sourceAlpha) {
  return (sourceColor * sourceAlpha) + (destinationColor * (1.0 - sourceAlpha));
}

void main() {
  vec2 coord = scale * (gl_FragCoord.xy - uResolution.xy) / min(uResolution.y, uResolution.x);

  float len = createLen();
  float len3 = createLen();
  float len4 = createLen4(5.0, 20.0, 5.0, 40.0);

  vec3 c1 = uColor1 + cos(len) * 0.25 + 0.25;
  vec3 c3 = uColor3 + cos(len3) * 0.5 + 0.75;
  vec3 c4 = uColor4 + cos(len4) * 0.75 + 0.95;

  float c4Value = min(1.0, max(0.0, 1.5 - (c4[2] / 1.1)));

  vec3 blend = c3;

  // vec3 circle = createCircle(vec2(sin(uTime / 10.0) * 0.2, 0.0), uColor3, 0.5, 0.2);
  vec3 circle = createCircle(vec2(sin(uTime / 10.0) * -0.2, 0.0), uColor3, 0.5, 0.2);
  blend = sourceOver(circle, blend, circle.r);

  vec3 circle2 = createCircle(vec2(0.0, sin(1.0 + uTime / 20.0) * 0.5), uColor1, 0.7, 0.2);
  blend = sourceOver(circle2, blend, circle2.b);

  blend = mix(blend, c1, c4Value);
  blend = mix(blend, c4, 0.01);

  vec3 color = blend;

  // float r = color[0];
  // float g = color[1];
  // float b = color[2];

  // vec3 hsb = rgb2hsv(vec3(r, g, b));
  // vec2 ran = vec2(coord.x, coord.y + (uTime / 5000000.0));
  // hsb[1] -= rand(ran) * 0.15;
  // vec3 rgb = hsv2rgb(hsb);

  gl_FragColor = vec4(color, 1.0);
}

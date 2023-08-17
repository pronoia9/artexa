'use client'

import { motion } from "framer-motion";

export const SVGs = ({ type, ...props }) => {
  if (!type) return <></>;
  return {
    at: (
      <motion.svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M256 64C150 64 64 150 64 256C64 362 150 448 256 448C273.7 448 288 462.3 288 480C288 497.7 273.7 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V288C512 341 469 384 416 384C386.7 384 360.4 370.8 342.8 350.1C320 371.1 289.5 384 256 384C185.3 384 128 326.7 128 256C128 185.3 185.3 128 256 128C283.9 128 309.7 136.9 330.7 152.1C336.4 147.1 343.8 144 352 144C369.7 144 384 158.3 384 176V256V288C384 305.7 398.3 320 416 320C433.7 320 448 305.7 448 288V256C448 150 362 64 256 64ZM320 256C320 239.026 313.257 222.747 301.255 210.745C289.253 198.743 272.974 192 256 192C239.026 192 222.747 198.743 210.745 210.745C198.743 222.747 192 239.026 192 256C192 272.974 198.743 289.253 210.745 301.255C222.747 313.257 239.026 320 256 320C272.974 320 289.253 313.257 301.255 301.255C313.257 289.253 320 272.974 320 256Z' />
      </motion.svg>
    ),
    check: (
      <motion.svg {...props} viewBox='0 0 448 321' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M438.6 9.3999C451.1 21.8999 451.1 42.1999 438.6 54.6999L182.6 310.7C170.1 323.2 149.8 323.2 137.3 310.7L9.3 182.7C-3.2 170.2 -3.2 149.9 9.3 137.4C21.8 124.9 42.1 124.9 54.6 137.4L160 242.7L393.4 9.3999C405.9 -3.1001 426.2 -3.1001 438.7 9.3999H438.6Z' />
      </motion.svg>
    ),
    left: (
      <motion.svg {...props} viewBox='0 0 257 450' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9.40002 202.4C-3.09998 214.9 -3.09998 235.2 9.40002 247.7L201.4 439.7C213.9 452.2 234.2 452.2 246.7 439.7C259.2 427.2 259.2 406.9 246.7 394.4L77.3 225L246.6 55.5998C259.1 43.0998 259.1 22.7998 246.6 10.2998C234.1 -2.2002 213.8 -2.2002 201.3 10.2998L9.30002 202.3L9.40002 202.4Z' />
      </motion.svg>
    ),
    right: (
      <motion.svg {...props} viewBox='0 0 257 450' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M247.6 202.4C260.1 214.9 260.1 235.2 247.6 247.7L55.6 439.7C43.1 452.2 22.8 452.2 10.3 439.7C-2.19995 427.2 -2.19995 406.9 10.3 394.4L179.7 225L10.4 55.5998C-2.09995 43.0998 -2.09995 22.7998 10.4 10.2998C22.9 -2.2002 43.2 -2.2002 55.7 10.2998L247.7 202.3L247.6 202.4Z' />
      </motion.svg>
    ),
    discord: (
      <motion.svg {...props} viewBox='0 0 588 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M498.531 37.8356C498.367 37.5189 498.097 37.2708 497.767 37.1356C459.644 19.6443 419.413 7.17154 378.081 0.0296171C377.705 -0.0401938 377.317 0.0101686 376.972 0.173542C376.627 0.336915 376.342 0.604981 376.158 0.939617C370.68 10.8825 365.707 21.0955 361.258 31.5396C316.704 24.7764 271.385 24.7764 226.832 31.5396C222.354 21.069 217.301 10.8534 211.697 0.939617C211.505 0.612253 211.218 0.350361 210.875 0.188049C210.532 0.0257372 210.148 -0.0294712 209.773 0.0296171C168.437 7.15655 128.203 19.6302 90.0849 37.1366C89.7586 37.275 89.4832 37.5112 89.2969 37.8126C13.0679 151.651 -7.81414 262.69 2.42986 372.354C2.45868 372.622 2.54125 372.883 2.67267 373.119C2.8041 373.355 2.98168 373.562 3.19486 373.729C47.5823 406.594 97.2302 431.681 150.02 447.918C150.392 448.029 150.789 448.024 151.157 447.903C151.526 447.782 151.849 447.552 152.083 447.242C163.421 431.814 173.467 415.478 182.12 398.4C182.239 398.165 182.307 397.908 182.319 397.646C182.331 397.383 182.288 397.121 182.192 396.877C182.095 396.632 181.949 396.411 181.76 396.227C181.572 396.044 181.348 395.902 181.101 395.812C165.258 389.75 149.921 382.443 135.233 373.959C134.966 373.802 134.742 373.582 134.58 373.318C134.419 373.054 134.325 372.754 134.306 372.445C134.288 372.136 134.346 371.827 134.476 371.546C134.605 371.265 134.801 371.02 135.048 370.833C138.13 368.524 141.214 366.122 144.157 363.696C144.418 363.48 144.735 363.342 145.07 363.297C145.406 363.252 145.748 363.301 146.057 363.44C242.286 407.357 346.467 407.357 441.557 363.44C441.867 363.292 442.212 363.236 442.553 363.277C442.893 363.318 443.215 363.456 443.481 363.673C446.425 366.099 449.508 368.524 452.613 370.833C452.861 371.018 453.059 371.261 453.19 371.542C453.322 371.822 453.382 372.13 453.366 372.439C453.35 372.748 453.258 373.048 453.098 373.313C452.939 373.578 452.716 373.8 452.451 373.959C437.796 382.514 422.445 389.817 406.561 395.789C406.314 395.882 406.09 396.027 405.903 396.214C405.717 396.4 405.571 396.624 405.477 396.87C405.382 397.117 405.341 397.38 405.356 397.644C405.37 397.907 405.44 398.165 405.561 398.4C414.358 415.383 424.39 431.699 435.575 447.215C435.802 447.533 436.123 447.772 436.493 447.897C436.864 448.023 437.264 448.029 437.638 447.915C490.522 431.733 540.257 406.644 584.7 373.729C584.916 373.571 585.096 373.368 585.228 373.135C585.36 372.902 585.441 372.643 585.465 372.377C597.729 245.594 564.933 135.465 498.531 37.8356ZM196.491 305.58C167.519 305.58 143.647 278.993 143.647 246.341C143.647 213.689 167.056 187.1 196.491 187.1C226.156 187.1 249.797 213.92 249.334 246.339C249.334 278.993 225.924 305.58 196.491 305.58ZM391.871 305.58C362.9 305.58 339.028 278.993 339.028 246.341C339.028 213.689 362.437 187.1 391.871 187.1C421.538 187.1 445.178 213.92 444.715 246.339C444.715 278.993 421.538 305.58 391.871 305.58Z' />
      </motion.svg>
    ),
    download: (
      <motion.svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M288 32C288 14.3 273.7 0 256 0C238.3 0 224 14.3 224 32V274.7L150.6 201.3C138.1 188.8 117.8 188.8 105.3 201.3C92.8 213.8 92.8 234.1 105.3 246.6L233.3 374.6C245.8 387.1 266.1 387.1 278.6 374.6L406.6 246.6C419.1 234.1 419.1 213.8 406.6 201.3C394.1 188.8 373.8 188.8 361.3 201.3L288 274.7V32ZM64 352C28.7 352 0 380.7 0 416V448C0 483.3 28.7 512 64 512H448C483.3 512 512 483.3 512 448V416C512 380.7 483.3 352 448 352H346.5L301.2 397.3C276.2 422.3 235.7 422.3 210.7 397.3L165.5 352H64ZM432 408C438.365 408 444.47 410.529 448.971 415.029C453.471 419.53 456 425.635 456 432C456 438.365 453.471 444.47 448.971 448.971C444.47 453.471 438.365 456 432 456C425.635 456 419.53 453.471 415.029 448.971C410.529 444.47 408 438.365 408 432C408 425.635 410.529 419.53 415.029 415.029C419.53 410.529 425.635 408 432 408Z' />
      </motion.svg>
    ),
    'ellipsis-vertical': (
      <motion.svg {...props} viewBox='0 0 112 432' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M56 320C41.1479 320 26.9041 325.9 16.402 336.402C5.89998 346.904 0 361.148 0 376C0 390.852 5.89998 405.096 16.402 415.598C26.9041 426.1 41.1479 432 56 432C70.8521 432 85.0959 426.1 95.598 415.598C106.1 405.096 112 390.852 112 376C112 361.148 106.1 346.904 95.598 336.402C85.0959 325.9 70.8521 320 56 320ZM56 160C41.1479 160 26.9041 165.9 16.402 176.402C5.89998 186.904 0 201.148 0 216C0 230.852 5.89998 245.096 16.402 255.598C26.9041 266.1 41.1479 272 56 272C70.8521 272 85.0959 266.1 95.598 255.598C106.1 245.096 112 230.852 112 216C112 201.148 106.1 186.904 95.598 176.402C85.0959 165.9 70.8521 160 56 160ZM112 56C112 41.1479 106.1 26.9041 95.598 16.402C85.0959 5.89998 70.8521 0 56 0C41.1479 0 26.9041 5.89998 16.402 16.402C5.89998 26.9041 0 41.1479 0 56C0 70.8521 5.89998 85.0959 16.402 95.598C26.9041 106.1 41.1479 112 56 112C70.8521 112 85.0959 106.1 95.598 95.598C106.1 85.0959 112 70.8521 112 56Z' />
      </motion.svg>
    ),
    envelope: (
      <motion.svg {...props} viewBox='0 0 512 384' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M48 0C21.5 0 0 21.5 0 48C0 63.1 7.1 77.3 19.2 86.4L236.8 249.6C248.2 258.1 263.8 258.1 275.2 249.6L492.8 86.4C504.9 77.3 512 63.1 512 48C512 21.5 490.5 0 464 0H48ZM0 112V320C0 355.3 28.7 384 64 384H448C483.3 384 512 355.3 512 320V112L294.4 275.2C271.6 292.3 240.4 292.3 217.6 275.2L0 112Z' />
      </motion.svg>
    ),
    expand: (
      <motion.svg {...props} viewBox='0 0 448 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M32 0C14.3 0 0 14.3 0 32V128C0 145.7 14.3 160 32 160C49.7 160 64 145.7 64 128V64H128C145.7 64 160 49.7 160 32C160 14.3 145.7 0 128 0H32ZM64 320C64 302.3 49.7 288 32 288C14.3 288 0 302.3 0 320V416C0 433.7 14.3 448 32 448H128C145.7 448 160 433.7 160 416C160 398.3 145.7 384 128 384H64V320ZM320 0C302.3 0 288 14.3 288 32C288 49.7 302.3 64 320 64H384V128C384 145.7 398.3 160 416 160C433.7 160 448 145.7 448 128V32C448 14.3 433.7 0 416 0H320ZM448 320C448 302.3 433.7 288 416 288C398.3 288 384 302.3 384 320V384H320C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448H416C433.7 448 448 433.7 448 416V320Z' />
      </motion.svg>
    ),
    'github-repo': (
      <motion.svg {...props} viewBox='0 0 496 484' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M165.9 389.4C165.9 391.4 163.6 393 160.7 393C157.4 393.3 155.1 391.7 155.1 389.4C155.1 387.4 157.4 385.8 160.3 385.8C163.3 385.5 165.9 387.1 165.9 389.4ZM134.8 384.9C134.1 386.9 136.1 389.2 139.1 389.8C141.7 390.8 144.7 389.8 145.3 387.8C145.9 385.8 144 383.5 141 382.6C138.4 381.9 135.5 382.9 134.8 384.9ZM179 383.2C176.1 383.9 174.1 385.8 174.4 388.1C174.7 390.1 177.3 391.4 180.3 390.7C183.2 390 185.2 388.1 184.9 386.1C184.6 384.2 181.9 382.9 179 383.2ZM244.8 0C106.1 0 0 105.3 0 244C0 354.9 69.8 449.8 169.5 483.2C182.3 485.5 186.8 477.6 186.8 471.1C186.8 464.9 186.5 430.7 186.5 409.7C186.5 409.7 116.5 424.7 101.8 379.9C101.8 379.9 90.4 350.8 74 343.3C74 343.3 51.1 327.6 75.6 327.9C75.6 327.9 100.5 329.9 114.2 353.7C136.1 392.3 172.8 381.2 187.1 374.6C189.4 358.6 195.9 347.5 203.1 340.9C147.2 334.7 90.8 326.6 90.8 230.4C90.8 202.9 98.4 189.1 114.4 171.5C111.8 165 103.3 138.2 117 103.6C137.9 97.1 186 130.6 186 130.6C206 125 227.5 122.1 248.8 122.1C270.1 122.1 291.6 125 311.6 130.6C311.6 130.6 359.7 97 380.6 103.6C394.3 138.3 385.8 165 383.2 171.5C399.2 189.2 409 203 409 230.4C409 326.9 350.1 334.6 294.2 340.9C303.4 348.8 311.2 363.8 311.2 387.3C311.2 421 310.9 462.7 310.9 470.9C310.9 477.4 315.5 485.3 328.2 483C428.2 449.8 496 354.9 496 244C496 105.3 383.5 0 244.8 0ZM97.2 344.9C95.9 345.9 96.2 348.2 97.9 350.1C99.5 351.7 101.8 352.4 103.1 351.1C104.4 350.1 104.1 347.8 102.4 345.9C100.8 344.3 98.5 343.6 97.2 344.9ZM86.4 336.8C85.7 338.1 86.7 339.7 88.7 340.7C90.3 341.7 92.3 341.4 93 340C93.7 338.7 92.7 337.1 90.7 336.1C88.7 335.5 87.1 335.8 86.4 336.8ZM118.8 372.4C117.2 373.7 117.8 376.7 120.1 378.6C122.4 380.9 125.3 381.2 126.6 379.6C127.9 378.3 127.3 375.3 125.3 373.4C123.1 371.1 120.1 370.8 118.8 372.4ZM107.4 357.7C105.8 358.7 105.8 361.3 107.4 363.6C109 365.9 111.7 366.9 113 365.9C114.6 364.6 114.6 362 113 359.7C111.6 357.4 109 356.4 107.4 357.7Z' />
      </motion.svg>
    ),
    globe: (
      <motion.svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.1 299.6 160 278.2 160 256C160 233.8 161.2 212.4 163.3 192H348.7C350.9 212.4 352 233.8 352 256ZM380.8 192H503.9C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 278 384 256C384 234 382.9 212.6 380.8 192ZM493.4 160H376.7C366.7 96.1 346.9 42.6 321.4 8.4C399.7 29.1 463.4 85.9 493.3 160H493.4ZM344.3 160H167.7C173.8 123.6 183.2 91.4 194.7 65.3C205.2 41.7 216.9 24.6 228.2 13.8C239.4 3.2 248.7 0 256 0C263.3 0 272.6 3.2 283.8 13.8C295.1 24.6 306.8 41.7 317.3 65.3C328.9 91.3 338.2 123.5 344.3 160ZM135.3 160H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160ZM8.1 192H131.2C129.1 212.6 128 234 128 256C128 278 129.1 299.4 131.2 320H8.1C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.1 192ZM194.7 446.6C183.1 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.2 295.1 487.3 283.8 498.1C272.6 508.8 263.3 512 256 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.7V446.6ZM135.3 352C145.3 415.9 165.1 469.4 190.6 503.6C112.2 482.9 48.6 426.1 18.6 352H135.3ZM493.4 352C463.4 426.1 399.8 482.9 321.5 503.6C347 469.4 366.7 415.9 376.8 352H493.4Z' />
      </motion.svg>
    ),
    inbox: (
      <motion.svg {...props} viewBox='0 0 512 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M121 0C91.6 0 66 20 58.9 48.5L1.9 276.4C0.6 281.5 0 286.7 0 291.9V384C0 419.3 28.7 448 64 448H448C483.3 448 512 419.3 512 384V291.9C512 286.7 511.4 281.5 510.1 276.4L453.1 48.5C446 20 420.4 0 391 0H121ZM121 64H391L439 256H387.8C375.7 256 364.6 262.8 359.2 273.7L344.9 302.3C339.5 313.1 328.4 320 316.3 320H195.8C183.7 320 172.6 313.2 167.2 302.3L152.9 273.7C147.5 262.9 136.4 256 124.3 256H73L121 64Z' />
      </motion.svg>
    ),
    linkedin: (
      <motion.svg {...props} viewBox='0 0 448 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M416 0H31.9C14.3 0 0 14.5 0 32.3V415.7C0 433.5 14.3 448 31.9 448H416C433.6 448 448 433.5 448 415.7V32.3C448 14.5 433.6 0 416 0ZM135.4 384H69V170.2H135.5V384H135.4ZM102.2 141C80.9 141 63.7 123.7 63.7 102.5C63.7 81.3 80.9 64 102.2 64C123.4 64 140.7 81.3 140.7 102.5C140.7 123.8 123.5 141 102.2 141ZM384.3 384H317.9V280C317.9 255.2 317.4 223.3 283.4 223.3C248.8 223.3 243.5 250.3 243.5 278.2V384H177.1V170.2H240.8V199.4H241.7C250.6 182.6 272.3 164.9 304.6 164.9C371.8 164.9 384.3 209.2 384.3 266.8V384Z' />
      </motion.svg>
    ),
    moon: (
      <motion.svg {...props} viewBox='0 0 384 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M223.5 0C100 0 0 100.3 0 224C0 347.7 100 448 223.5 448C284.1 448 339 423.8 379.3 384.6C384.3 379.7 385.6 372.1 382.4 365.9C379.2 359.7 372.3 356.2 365.4 357.4C355.6 359.1 345.6 360 335.3 360C238.4 360 159.8 281.2 159.8 184C159.8 118.2 195.8 60.9 249.1 30.7C255.2 27.2 258.3 20.2 256.8 13.4C255.3 6.6 249.5 1.5 242.5 0.900002C236.2 0.400002 229.9 0.0999985 223.5 0.0999985V0Z' />
      </motion.svg>
    ),
    facebook: (
      <motion.svg {...props} viewBox='0 0 448 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M400 0H48C35.2696 0 23.0606 5.05713 14.0589 14.0589C5.05713 23.0606 0 35.2696 0 48L0 400C0 412.73 5.05713 424.939 14.0589 433.941C23.0606 442.943 35.2696 448 48 448H185.25V295.69H122.25V224H185.25V169.36C185.25 107.21 222.25 72.88 278.92 72.88C306.06 72.88 334.44 77.72 334.44 77.72V138.72H303.17C272.36 138.72 262.75 157.84 262.75 177.45V224H331.53L320.53 295.69H262.75V448H400C412.73 448 424.939 442.943 433.941 433.941C442.943 424.939 448 412.73 448 400V48C448 35.2696 442.943 23.0606 433.941 14.0589C424.939 5.05713 412.73 0 400 0Z' />
      </motion.svg>
    ),
    github: (
      <motion.svg {...props} viewBox='0 0 448 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M400 0H48C21.5 0 0 21.5 0 48V400C0 426.5 21.5 448 48 448H400C426.5 448 448 426.5 448 400V48C448 21.5 426.5 0 400 0ZM277.3 383.7C268.9 385.2 265.8 380 265.8 375.7C265.8 370.3 266 342.7 266 320.4C266 304.8 260.8 294.9 254.7 289.7C291.7 285.6 330.7 280.5 330.7 216.6C330.7 198.4 324.2 189.3 313.6 177.6C315.3 173.3 321 155.6 311.9 132.6C298 128.3 266.2 150.5 266.2 150.5C253 146.8 238.7 144.9 224.6 144.9C210.5 144.9 196.2 146.8 183 150.5C183 150.5 151.2 128.3 137.3 132.6C128.2 155.5 133.8 173.2 135.6 177.6C125 189.3 120 198.4 120 216.6C120 280.2 157.3 285.6 194.3 289.7C189.5 294 185.2 301.4 183.7 312C174.2 316.3 149.9 323.7 135.4 298.1C126.3 282.3 109.9 281 109.9 281C93.7 280.8 108.8 291.2 108.8 291.2C119.6 296.2 127.2 315.4 127.2 315.4C136.9 345.1 183.3 335.1 183.3 335.1C183.3 349 183.5 371.6 183.5 375.7C183.5 380 180.5 385.2 172 383.7C106 361.6 59.8 298.8 59.8 225.4C59.8 133.6 130 63.9 221.8 63.9C313.6 63.9 388 133.6 388 225.4C388.1 298.8 343.3 361.7 277.3 383.7ZM179.2 322.6C177.3 323 175.5 322.2 175.3 320.9C175.1 319.4 176.4 318.1 178.3 317.7C180.2 317.5 182 318.3 182.2 319.6C182.5 320.9 181.2 322.2 179.2 322.6ZM169.7 321.7C169.7 323 168.2 324.1 166.2 324.1C164 324.3 162.5 323.2 162.5 321.7C162.5 320.4 164 319.3 166 319.3C167.9 319.1 169.7 320.2 169.7 321.7ZM156 320.6C155.6 321.9 153.6 322.5 151.9 321.9C150 321.5 148.7 320 149.1 318.7C149.5 317.4 151.5 316.8 153.2 317.2C155.2 317.8 156.5 319.3 156 320.6ZM143.7 315.2C142.8 316.3 140.9 316.1 139.4 314.6C137.9 313.3 137.5 311.4 138.5 310.5C139.4 309.4 141.3 309.6 142.8 311.1C144.1 312.4 144.6 314.4 143.7 315.2ZM134.6 306.1C133.7 306.7 132 306.1 130.9 304.6C129.8 303.1 129.8 301.4 130.9 300.7C132 299.8 133.7 300.5 134.6 302C135.7 303.5 135.7 305.3 134.6 306.1ZM128.1 296.4C127.2 297.3 125.7 296.8 124.6 295.8C123.5 294.5 123.3 293 124.2 292.3C125.1 291.4 126.6 291.9 127.7 292.9C128.8 294.2 129 295.7 128.1 296.4ZM121.4 289C121 289.9 119.7 290.1 118.6 289.4C117.3 288.8 116.7 287.7 117.1 286.8C117.5 286.2 118.6 285.9 119.9 286.4C121.2 287.1 121.8 288.2 121.4 289Z' />
      </motion.svg>
    ),
    snapchat: (
      <motion.svg {...props} viewBox='0 0 448 448' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M384 0H64C47.0261 0 30.7475 6.74284 18.7452 18.7452C6.74284 30.7475 0 47.0261 0 64L0 384C0 400.974 6.74284 417.252 18.7452 429.255C30.7475 441.257 47.0261 448 64 448H384C400.974 448 417.252 441.257 429.255 429.255C441.257 417.252 448 400.974 448 384V64C448 47.0261 441.257 30.7475 429.255 18.7452C417.252 6.74284 400.974 0 384 0ZM380.093 319.309L380.01 319.409C377.518 322.167 374.569 324.475 371.293 326.232C364.794 329.8 357.88 332.555 350.707 334.432C349.334 334.799 348.031 335.394 346.855 336.192C344.697 338.101 344.755 340.832 342.455 344.742C340.755 347.707 338.419 350.258 335.615 352.213C328.908 356.845 321.371 357.136 313.385 357.443C306.171 357.717 297.995 358.024 288.656 361.112C284.895 362.357 280.903 364.806 276.279 367.645C265.014 374.545 249.599 383.998 223.979 383.998C198.359 383.998 183.054 374.598 171.873 367.719C167.216 364.831 163.198 362.357 159.33 361.079C149.991 357.999 141.814 357.679 134.601 357.409C126.615 357.102 119.078 356.809 112.37 352.18C110.003 350.536 107.964 348.464 106.36 346.07C103.16 341.438 103.505 338.27 101.106 336.175C99.852 335.338 98.4659 334.718 97.006 334.341C89.9297 332.468 83.1083 329.739 76.693 326.214C73.6104 324.573 70.8087 322.452 68.393 319.93C61.81 313.173 60.117 305.154 62.707 298.106C66.143 288.768 74.278 285.995 82.107 281.844C96.883 273.817 108.455 263.789 116.54 251.96C118.845 248.623 120.848 245.086 122.525 241.393C123.314 239.235 123.297 238.064 122.766 236.977C122.197 236.089 121.444 235.333 120.558 234.76C118.026 233.084 115.445 231.407 113.676 230.26C110.406 228.119 107.808 226.442 106.147 225.28C99.88 220.897 95.497 216.24 92.747 211.035C90.8397 207.432 89.7302 203.462 89.4939 199.392C89.2577 195.323 89.9003 191.25 91.378 187.451C95.512 176.527 105.847 169.745 118.356 169.745C120.993 169.742 123.623 170.021 126.201 170.575C126.89 170.725 127.571 170.882 128.243 171.057C128.135 163.627 128.301 155.7 128.965 147.938C131.323 120.677 140.877 106.349 150.839 94.944C157.224 87.7767 164.752 81.7175 173.119 77.013C188.254 68.383 205.312 64 224 64C242.688 64 259.828 68.383 274.944 77.016C283.29 81.72 290.804 87.7677 297.183 94.916C307.144 106.322 316.699 120.625 319.057 147.911C319.68 155.6 319.918 163.316 319.77 171.029C320.443 170.855 321.132 170.697 321.821 170.548C324.399 169.994 327.028 169.715 329.665 169.718C342.165 169.718 352.485 176.5 356.636 187.424C358.107 191.221 358.744 195.291 358.502 199.356C358.26 203.421 357.147 207.387 355.236 210.983C352.496 216.183 348.113 220.844 341.846 225.227C340.178 226.414 337.588 228.091 334.317 230.208C332.482 231.395 329.776 233.155 327.153 234.89C326.369 235.426 325.704 236.118 325.202 236.924C324.696 237.97 324.663 239.115 325.368 241.132C327.069 244.904 329.105 248.516 331.453 251.924C339.721 264.024 351.641 274.237 366.907 282.331C368.393 283.103 369.887 283.831 371.348 284.589C372.07 284.921 372.917 285.352 373.839 285.889C378.739 288.612 383.039 291.899 385.294 298.042C387.821 304.915 386.269 312.7 380.093 319.309ZM363.374 300.848C313.061 276.534 305.042 238.93 304.685 236.099C304.254 232.72 303.764 230.064 307.491 226.627C311.085 223.299 327.032 213.437 331.456 210.349C338.786 205.235 341.99 200.13 339.616 193.854C337.956 189.538 333.93 187.878 329.655 187.878C328.312 187.882 326.973 188.032 325.662 188.326C317.627 190.069 309.824 194.095 305.308 195.183C304.765 195.323 304.208 195.398 303.648 195.407C301.24 195.407 300.369 194.336 300.56 191.439C301.124 182.656 302.319 165.514 300.933 149.502C299.049 127.47 291.943 116.554 283.501 106.902C279.45 102.278 260.366 82.248 223.965 82.248C187.564 82.248 168.53 102.359 164.479 107C156.045 116.654 148.948 127.57 147.047 149.6C145.661 165.613 146.906 182.747 147.42 191.537C147.586 194.293 146.74 195.505 144.332 195.505C143.772 195.496 143.215 195.421 142.672 195.281C138.165 194.194 130.362 190.168 122.326 188.425C121.015 188.131 119.676 187.98 118.333 187.976C114.083 187.976 110.033 189.612 108.372 193.953C105.998 200.229 109.219 205.334 116.54 210.447C120.965 213.535 136.911 223.405 140.506 226.726C144.225 230.163 143.743 232.819 143.311 236.197C142.955 238.987 134.927 276.591 84.622 300.946C81.676 302.374 76.662 305.396 85.502 310.277C99.382 317.905 108.613 317.084 115.802 321.707C121.895 325.634 118.302 334.101 122.725 337.156C128.179 340.916 144.308 336.89 165.06 343.756C182.493 349.5 193.176 365.771 224.023 365.771C254.87 365.771 265.811 349.471 282.961 343.798C303.756 336.933 319.851 340.959 325.297 337.198C329.73 334.143 326.119 325.676 332.22 321.75C339.401 317.126 348.631 317.95 362.52 310.278C371.36 305.355 366.346 302.333 363.374 300.848Z' />
      </motion.svg>
    ),
    sun: (
      <motion.svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M361.5 1.19991C366.5 3.29991 370.1 7.79992 371.1 13.0999L391 121L498.9 140.8C504.2 141.8 508.7 145.4 510.8 150.4C512.9 155.4 512.3 161.1 509.2 165.6L446.9 256L509.2 346.3C512.3 350.8 512.9 356.5 510.8 361.5C508.7 366.5 504.2 370.1 498.9 371.1L391 391L371.1 498.9C370.1 504.2 366.5 508.7 361.5 510.8C356.5 512.9 350.8 512.3 346.3 509.2L256 446.9L165.7 509.2C161.2 512.3 155.5 512.9 150.5 510.8C145.5 508.7 141.9 504.2 140.9 498.9L121 391L13.0999 371.1C7.79992 370.1 3.29991 366.5 1.19991 361.5C-0.900085 356.5 -0.300085 350.8 2.79991 346.3L65.0999 256L2.79991 165.7C-0.300085 161.2 -0.900085 155.5 1.19991 150.5C3.29991 145.5 7.79992 141.9 13.0999 140.9L121 121L140.9 13.0999C141.9 7.79992 145.5 3.29991 150.5 1.19991C155.5 -0.900085 161.2 -0.300085 165.7 2.79991L256 65.0999L346.3 2.79991C350.8 -0.300085 356.5 -0.900085 361.5 1.19991ZM160 256C160 230.539 170.114 206.121 188.118 188.118C206.121 170.114 230.539 160 256 160C281.461 160 305.879 170.114 323.882 188.118C341.886 206.121 352 230.539 352 256C352 281.461 341.886 305.879 323.882 323.882C305.879 341.886 281.461 352 256 352C230.539 352 206.121 341.886 188.118 323.882C170.114 305.879 160 281.461 160 256ZM384 256C384 222.052 370.514 189.495 346.51 165.49C322.505 141.486 289.948 128 256 128C222.052 128 189.495 141.486 165.49 165.49C141.486 189.495 128 222.052 128 256C128 289.948 141.486 322.505 165.49 346.51C189.495 370.514 222.052 384 256 384C289.948 384 322.505 370.514 346.51 346.51C370.514 322.505 384 289.948 384 256Z' />
      </motion.svg>
    ),
    user: (
      <motion.svg {...props} viewBox='0 0 448 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M224 256C257.948 256 290.505 242.514 314.51 218.51C338.514 194.505 352 161.948 352 128C352 94.0523 338.514 61.495 314.51 37.4903C290.505 13.4857 257.948 0 224 0C190.052 0 157.495 13.4857 133.49 37.4903C109.486 61.495 96 94.0523 96 128C96 161.948 109.486 194.505 133.49 218.51C157.495 242.514 190.052 256 224 256ZM178.3 304C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3C434.7 512 448 498.7 448 482.3C448 383.8 368.2 304 269.7 304H178.3Z' />
      </motion.svg>
    ),
    'paper-plane': (
      <motion.svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.1 260.2C-6.49997 273.1 -4.39997 307.5 19.7 317.5L160 376V479.3C160 497.4 174.6 512 192.7 512C202.4 512 211.6 507.7 217.8 500.2L279.8 425.9L403.7 477.5C422.6 485.4 444.5 473 447.6 452.8L511.6 36.7999C513.5 24.6999 508.2 12.4999 498.1 5.59992C488 -1.30008 474.8 -1.90008 464.1 4.19992L16.1 260.2ZM68.2 285.7L409.7 90.5999L190.1 336L191.3 337L68.2 285.7ZM403.3 425.4L236.7 355.9L450.8 116.6L403.3 425.4Z' />
      </motion.svg>
    ),
    down: (
      <motion.svg {...props} viewBox='0 0 450 257' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M202.4 247.6C214.9 260.1 235.2 260.1 247.7 247.6L439.7 55.5998C452.2 43.0998 452.2 22.7998 439.7 10.2998C427.2 -2.2002 406.9 -2.2002 394.4 10.2998L225 179.7L55.6 10.3998C43.1 -2.1002 22.8 -2.1002 10.3 10.3998C-2.19995 22.8998 -2.19995 43.1998 10.3 55.6998L202.3 247.7L202.4 247.6Z'
        />
      </motion.svg>
    ),
  }[type];
};

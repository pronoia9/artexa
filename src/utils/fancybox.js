'use client';

import { Fancybox } from '@fancyapps/ui';

export const openFancybox = (image) => void Fancybox.show([{ src: image, type: 'image' }]);

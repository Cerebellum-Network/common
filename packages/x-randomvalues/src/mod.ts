// Copyright 2017-2023 @polkadot/x-randomvalues authors & contributors
// SPDX-License-Identifier: Apache-2.0

export { packageInfo } from './packageInfo.js';

export function getRandomValues <T extends Uint8Array> (arr: T): T {
  return crypto.getRandomValues(arr);
}

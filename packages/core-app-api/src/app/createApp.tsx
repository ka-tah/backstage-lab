/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApp as createDefaultApp } from '@backstage/app-defaults';
import { AppContext, BackstageApp } from './types';

/**
 * Creates a new Backstage App.
 *
 * @deprecated Use {@link @backstage/app-defaults#createApp} from `@backstage/app-defaults` instead
 * @param options - A set of options for creating the app
 * @public
 */
export function createApp(
  options?: Parameters<typeof createDefaultApp>[0],
): BackstageApp & AppContext {
  // eslint-disable-next-line no-console
  console.warn(
    'DEPRECATION WARNING: The createApp function from @backstage/core-app-api will soon be removed, ' +
      'migrate to importing createApp from the @backstage/app-defaults package instead. ' +
      'If you do not wish to use a standard app configuration but instead supply all options yourself ' +
      ' you can use createSpecializedApp from @backstage/core-app-api instead.',
  );
  return createDefaultApp(options) as BackstageApp & AppContext;
}

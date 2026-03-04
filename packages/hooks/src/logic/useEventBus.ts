import type { InjectionKey } from 'vue';

import type { EventBus } from '../common/createEventBus';

import { inject } from 'vue';

export const EVENT_BUS_KEY: InjectionKey<EventBus> = Symbol('EventBusContext');
export function useEventBus() {
  const eventBus: EventBus | null = inject(EVENT_BUS_KEY, null);
  return eventBus;
}

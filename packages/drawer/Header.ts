import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-drawer__header',
  component: Div as typeof SMUIComponent,
});
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'vue-notion'

declare module 'prismjs'

// manual extension of route types
declare module 'vue-router/auto/routes' {
  import type {
    ParamValue,
    RouteRecordInfo,
  } from 'unplugin-vue-router'

  export interface RouteNamedMap {
    'custom-dynamic-name': RouteRecordInfo<
      'custom-dynamic-name',
      '/added-during-runtime/[...path]',
      { path: ParamValue<true> },
      { path: ParamValue<false> }
    >
  }
}

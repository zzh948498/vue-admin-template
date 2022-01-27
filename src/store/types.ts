// type GetModule<Modules> = typeof app extends { actions: infer A } ? A : unknown;
// type GetModuleItems<Modules> = {
//     [K in keyof Modules]: GetModule<Modules[K]>;
// };

// type ModulesType = typeof app.actions;

// export interface MyDispatch {
//     (type: string, payload?: any, options?: DispatchOptions): Promise<any>;
// }
// export declare class MyStore<S> extends Store<S> {
//     dispatch: MyDispatch;
// }

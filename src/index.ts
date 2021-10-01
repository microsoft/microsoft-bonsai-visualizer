/*
 * index.ts
 * Copyright: Microsoft 2021
 *
 * Visualizer interface for the Microsoft Bonsai wep app.
 */

export const Version = '1.0.0';
export const CompatibleVersion = '1.x';

export enum MessageType {
    IterationUpdate = 'IterationUpdate',
}

export type StructType = { [key: string]: ValueType };
export type ValueType = StructType | ValueType[] | number | string;

export type MetaType = {
    episode: number;
    iteration: number;
    [key: string]: ValueType;
};

// Message received by the visualizer
export interface IterationUpdateMessage {
    version: string;
    type: MessageType.IterationUpdate;
    config: ValueType | undefined;
    meta: MetaType | undefined;
    state: ValueType;
    action: ValueType | undefined;
}

export enum QueryParams {
    Theme = '_theme',
    Context = '_context',
    PrefsKey = '_prefsKey',
    Lang = '_lang',
}

export enum ThemeMode {
    Light = 'light',
    Dark = 'dark',
}

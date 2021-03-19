declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiAudio extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the dom element in current control template which handles the border style as jquery object. */
                protected __elementBorder: JQuery;
                /** Reference to the dom element in current control template which handles the focus style as jquery object. */
                protected __elementFocusBorder: JQuery;
                /** Reference to the underlying default html text audio element as default html element object. */
                protected __elemAudio: HTMLAudioElement;
                /**
                * Internal reference to the attribute "tchmi-src-list" */
                protected __srcList: TcHmiAudio.AudioSource[] | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-controls"  */
                protected __controls: boolean | undefined | undefined;
                /**  Internal reference to the attribute "data-tchmi-volume". Value between 0 and 1. */
                protected __volume: number | undefined;
                /**  Internal reference to the attribute "data-tchmi-autoplay". */
                protected __autoplay: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-muted". */
                protected __mute: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-loop". */
                protected __loop: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-playbackrate". */
                protected __playbackrate: number | undefined;
                /** Returns the current duration of the audio. */
                protected __duration: number;
                /** Returns the current duration of the audio. */
                protected __currentTime: number;
                /** Event handlers */
                protected __loadeddataHandler: (event: Event) => void;
                protected __volumechangeHandler: (event: Event) => void;
                protected __ratechangeHandler: (event: Event) => void;
                protected __durationchangeHandler: (event: Event) => void;
                protected __timeupdateHandler: (event: Event) => void;
                protected __endedHandler: (event: MediaStreamErrorEvent) => void;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                 * Loads Audio and Poster if access is now possible
                 */
                __processAccessConfig(): void;
                /**
                * Loads Audio and Poster if access is now possible
                */
                __processIsEnabled(): void;
                /**
                * Is raised if the browser have loaded the audio data.
                */
                private __onLoadedData;
                /**
                * Is raised if the browser had an error while loading the audio data.
                * Handles the audio and all source elements!
                */
                protected __onError: (evt: ErrorEvent) => void;
                /**
                * Is raised if the volume of audio is change.
                */
                private __onVolumeChange;
                /**
                * Is raised if the duration of audio is change.
                */
                private __onDurationChange;
                /**
                * Is raised if the audio ended playing.
                */
                private __onEnded;
                /**
                * Is raised if the audio started or paused playing.
                */
                private __onPlayingChange;
                /**
                * Is raised if the speed of audio is change.
                */
                private __onRateChange;
                /**
                * Is raised if the time of audio is updated.
                */
                private __onTimeUpdate;
                /**
                * Returns a {number} value in seconds which says whether the audio is long.
                */
                getDuration(): number;
                /**
                * Returns a {boolean} value which says whether the audio is ended or not.
                */
                getIsEnded(): boolean;
                /**
                * Returns a {boolean} value which says whether the audio is playing or not.
                */
                getIsPlaying(): boolean;
                /**
                * Sets the srcList attribute to a new value.
                * @param valueNew The new value for the src attribute;
                */
                setSrcList(valueNew: TcHmiAudio.AudioSource[] | null): void;
                /**
                 * The watch callback for the srcList object resolver.
                 */
                protected __onResolverForSrcListWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiAudio.AudioSource[]>) => void;
                /**
                * @returns The current value of the src attribute.
                */
                getSrcList(): TcHmiAudio.AudioSource[] | null | undefined;
                /**
                * Processes the current value of attribute src.
                */
                protected __processSrcList(): void;
                /**
                * Starts the audio.
                */
                play(): void;
                /**
                * Paused the audio.
                */
                pause(): void;
                /**
                * Stops the audio (paused audio and reset the currentTime).
                */
                stop(): void;
                /**
                * Skip backward (at the new value).
                */
                skipBackward(valueNew: number): void;
                /**
                * Skip forward (with the new value).
                */
                skipForward(valueNew: number): void;
                /**
                * Set the current time position to audio in seconds.
                */
                setCurrentTime(valueNew: number | null): void;
                /**
                * Returns a (Number) value in seconds which describes the current position in the audio.
                * @returns The current attribute value in seconds.
                */
                getCurrentTime(): number;
                /**
                 * Processes the current time
                 */
                protected __processCurrentTime(): void;
                /**
                 * Sets the controls value and calls the associated process function (processControls).
                 * @param valueNew The new controls value.
                 */
                setControls(valueNew: boolean | null): void;
                /**
                * Returns the current controls value.
                * @returns The current attribute value.
                */
                getControls(): boolean | undefined;
                /**
                * Processes the current controls attribute.
                */
                protected __processControls(): void;
                /**
                * Sets the volume value and calls the associated process function (processVolume).
                * @param valueNew The new volume value between 0 and 1.
                */
                setVolume(valueNew: number | null): void;
                /**
                * Returns the current volume value.
                * @returns  The current attribute volume value.
                */
                getVolume(): number | undefined;
                /**
                * Processes the current volume attribute.
                */
                protected __processVolume(): void;
                /**
                  * Sets the autoplay value and calls the associated process function (processAutoplay).
                  * @param valueNew The new autoplay value.
                */
                setAutoplay(valueNew: boolean | null): void;
                /**
                * Returns the current autoplay value.
                * @returns The current attribute autoplay value.
                */
                getAutoplay(): boolean | undefined;
                /**
                * Processes the current autoplay attribute.
                */
                protected __processAutoplay(): void;
                /**
                * Sets the mute value and calls the associated process function (processMute).
                * @param valueNew The new mute value.
                */
                setMute(valueNew: boolean | null): void;
                /**
                * Returns the current mute value.
                * @returns The current attribute mute value.
                */
                getMute(): boolean | undefined;
                /**
                * Processes the current mute attribute.
                */
                protected __processMute(): void;
                /**
                * Sets the loop value and calls the associated process function (processLoop).
                * @param valueNew The new loop value.
                */
                setLoop(valueNew: boolean | null): void;
                /**
                * Returns the current loop value.
                * @returns The current attribute loop value.
                */
                getLoop(): boolean | undefined;
                /**
                * Processes the current loop attribute.
                */
                protected __processLoop(): void;
                /**
                * Sets the playbackrate value and calls the associated process function (processPlaybackrate).
                * @param valueNew The new playbackrate value.
                */
                setPlaybackrate(valueNew: number | null): void;
                /**
                * Returns the current playbackrate value.
                * @returns The current attribute playbackrate value.
                */
                getPlaybackrate(): number | undefined;
                /**
                * Processes the current playbackrate attribute.
                */
                protected __processPlaybackrate(): void;
            }
            module TcHmiAudio {
                interface AudioSource {
                    source: string;
                    type: string;
                }
            }
        }
    }
}

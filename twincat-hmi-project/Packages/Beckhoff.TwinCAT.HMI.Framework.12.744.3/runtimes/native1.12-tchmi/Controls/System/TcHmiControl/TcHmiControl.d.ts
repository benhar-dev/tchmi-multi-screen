declare module TcHmi {
    module Controls {
        module System {
            class TcHmiControl extends TcHmi.Controls.System.baseTcHmiControl {
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @preserve (Part of the public API)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __resourcesDomEventRegWatchOnMouseRightClick: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseDoubleClick: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseEnter: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseMove: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseOut: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseLeave: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseDown: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseUp: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseOver: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseClick: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnMouseWheel: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnTouchStart: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnTouchMove: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnTouchEnd: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesDomEventRegWatchOnTouchCancel: Map<number, TcHmiControl.IDomEventObjCacheEntry> | null;
                protected __resourcesEventRegWatchOnPressed: Map<number, {
                    event: EventProvider.IEventEntry;
                    destroy: DestroyFunction;
                }> | null;
                protected __resourcesEventRegWatchOnMouseDownLeft: Map<number, {
                    event: EventProvider.IEventEntry;
                    destroy: DestroyFunction;
                }> | null;
                protected __resourcesEventRegWatchOnMouseDownRight: Map<number, {
                    event: EventProvider.IEventEntry;
                    destroy: DestroyFunction;
                }> | null;
                protected __resourcesEventRegWatchOnMouseUpLeft: Map<number, {
                    event: EventProvider.IEventEntry;
                    destroy: DestroyFunction;
                }> | null;
                protected __resourcesEventRegWatchOnMouseUpRight: Map<number, {
                    event: EventProvider.IEventEntry;
                    destroy: DestroyFunction;
                }> | null;
                protected __destroyDomEventRegWatchOnMouseRightClick: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseDoubleClick: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseEnter: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseMove: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseOut: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseLeave: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseDown: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseUp: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseOver: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseClick: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnMouseWheel: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnTouchStart: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnTouchMove: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnTouchEnd: DestroyFunction | null;
                protected __destroyDomEventRegWatchOnTouchCancel: DestroyFunction | null;
                protected __destroyEvenRegWatchOnPressed: DestroyFunction | null;
                protected __destroyEvenRegWatchOnMouseDownLeft: DestroyFunction | null;
                protected __destroyEvenRegWatchOnMouseDownRight: DestroyFunction | null;
                protected __destroyEvenRegWatchOnMouseUpLeft: DestroyFunction | null;
                protected __destroyEvenRegWatchOnMouseUpRight: DestroyFunction | null;
                protected __destroyOnFunctionResultChanged: DestroyFunction | null;
                protected __destroyOnPropertyChanged: DestroyFunction | null;
                /**
                 * Version
                 * @preserve (Part of the public API)
                 */
                version: Version;
                /**
                 * Main HTML Element of the Control as jQuery object.
                 */
                protected __element: JQuery;
                /**
                * Precompiled copy of main JQuery element defining this control.
                */
                protected __pcElement: JQuery;
                /**
                * List of attributes defined in html.
                */
                protected readonly __attrs: TcHmi.Controls.ControlAttributeList;
                /**
                * Control Id
                */
                protected __id: string;
                /**
                * Type of the Control
                */
                protected readonly __type: string;
                /**
                 *  Row index of the Control inside a TcHmiGrid Container.
                 */
                protected __gridRowIndex: number | undefined;
                /**
                 *  Column index of the Control inside a TcHmiGrid Container.
                 */
                protected __gridColumnIndex: number | undefined;
                /**
                 * Determines if the control and it's children are enabled or not.
                 */
                protected __isEnabled: boolean | undefined;
                /**
                * Determines if the control is attached to the dom.
                */
                protected __isAttached: boolean;
                /**
                * Determines if all setters of the control were already called.
                */
                protected __attributesInitialized: boolean;
                /**
                * Determines if the control was already destroyed.
                */
                protected __isDestroyed: boolean;
                /**
                 * Determines if the control should not be destroyed.
                 */
                protected __keepAlive: boolean;
                /**
                * Parent control or null if there is (till now?) no parent control.
                */
                protected __parent: TcHmi.Controls.System.baseTcHmiControl | null;
                /**
                 * Child controls of the control.
                 */
                protected readonly __children: TcHmi.Controls.System.baseTcHmiControl[];
                /**
                * True for all ContainerControls
                */
                protected __isContainerControl: boolean;
                /**
                * A list of access rules which is defined in this control.
                * Set in constructor. If no Attribute is set, the processor will be called in __init
                */
                protected __accessConfig: TcHmi.AccessControl[];
                /**
                 * A list of virtual control right mappings.
                 */
                protected __virtualControlRightMappings: TcHmi.VirtualControlRightMapping[];
                protected __classNames: string[] | undefined;
                /**
                 * Map of Symbol.ObjectResolver used in attributes.
                 */
                protected __objectResolvers: Map<string, {
                    resolver: Symbol.ObjectResolver<object | null>;
                    watchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<object | null>) => void;
                    watchDestroyer: DestroyFunction | null;
                }>;
                /**
                * The elements z-index.
                */
                protected __zindex: number | null | undefined;
                /**
                 * The width of the control element.
                 */
                protected __width: number | null | undefined;
                /**
                * The width unit of the control element.
                */
                protected __widthUnit: DimensionUnit | undefined;
                /**
                 * In normal controls only 'Value' and 'Parent' must be used
                 * This base class must hold all possible values for technical reasons.
                 */
                protected __widthMode: SizeMode | SizeModeWithContent | undefined;
                /**
                * The height of the control element.
                */
                protected __height: number | null | undefined;
                /**
                * The height unit of the control element.
                */
                protected __heightUnit: DimensionUnit | undefined;
                /**
                * Resolved (content?) height as string, will be set to control.getElement() on __processHeight
                */
                protected __intHeight: string | null;
                /**
                 * In normal controls only 'Value' and 'Parent' must be used
                 * This base class must hold all possible values for technical reasons.
                 */
                protected __heightMode: SizeMode | SizeModeWithContent | undefined;
                /**
                * The top coordinate of the element.
                */
                protected __top: number | null | undefined;
                /**
                * The top unit of the control element.
                */
                protected __topUnit: DimensionUnit | undefined;
                /**
                * The left coordinate of the element.
                */
                protected __left: number | null | undefined;
                /**
                * The left unit of the control element.
                */
                protected __leftUnit: DimensionUnit | undefined;
                /**
                * The bottom coordinate of the element.
                */
                protected __bottom: number | null | undefined;
                /**
                * The bottom unit of the control element.
                */
                protected __bottomUnit: DimensionUnit | undefined;
                /**
                * The right coordinate of the element.
                */
                protected __right: number | null | undefined;
                /**
                * The right unit of the control element.
                */
                protected __rightUnit: DimensionUnit | undefined;
                /**
                * The minimum width of the element.
                */
                protected __minWidth: number | null | undefined;
                /**
                * The minimum width unit of the control element.
                */
                protected __minWidthUnit: DimensionUnit | undefined;
                /**
                * The maximum width of the element.
                */
                protected __maxWidth: number | null | undefined;
                /**
                * The maximum width unit of the control element.
                */
                protected __maxWidthUnit: DimensionUnit | undefined;
                /**
                * The minimum height of the element.
                */
                protected __minHeight: number | null | undefined;
                /**
                * The minimum height unit of the control element.
                */
                protected __minHeightUnit: DimensionUnit | undefined;
                /**
                * The maximum height of the element.
                */
                protected __maxHeight: number | null | undefined;
                /**
                * The maximum height unit of the control element.
                */
                protected __maxHeightUnit: DimensionUnit | undefined;
                /**
                * The elements opacity. The value has to be between 0 (0%) and 1 (100%).
                */
                protected __opacity: number | null | undefined;
                /**
                * The elements visibility.
                */
                protected __visibility: Visibility | undefined;
                /**
                * Transform
                */
                protected __transform: Transform[] | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-border-color".
                */
                protected __borderColor: TcHmi.Color | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-border-width".
                */
                protected __borderWidth: TcHmi.BorderWidth | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-border-radius".
                */
                protected __borderRadius: TcHmi.BorderRadius | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-border-style".
                */
                protected __borderStyle: TcHmi.BorderStyle | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-box-shadow".
                */
                protected __boxShadow: TcHmi.BoxShadow[] | null | undefined;
                /**
                 *  Trigger
                 */
                protected __trigger: TcHmi.System.Trigger[] | null | undefined;
                /**
                 *  Trigger which are active even when detached (only own onInitialized and onDestroyed)
                 */
                protected __triggerNonAttachList: TcHmi.System.Trigger[];
                /**
                 *  Trigger which are active only when attached
                 */
                protected __triggerAttachList: TcHmi.System.Trigger[];
                /**
                * Internal reference to the attribute "data-tchmi-tooltip".
                */
                protected __tooltip: string | null | undefined;
                /**
                 * Internal object to store the values of the various background attributes.
                 */
                protected __background: Partial<TcHmi.Background>;
                /**
                 * State of the className checkable without DOM access.
                 */
                private __accessAndEnableState;
                protected __asyncWorkAnimationFrameId: number;
                protected __asyncWorkData: TcHmiControl.IControlSpecificData;
                /**
                 * Rendered size cache.
                 */
                protected readonly __renderedSizeCache: {
                    left: number | null;
                    top: number | null;
                    right: number | null;
                    bottom: number | null;
                    width: number | null;
                    height: number | null;
                };
                __setLifeCycleState(newState: TcHmi.System.LifeCycleState): void;
                /**
                 * Is raised before control attribute setters are called to allow initialization based on current attribute values.
                 * @preserve (Part of the public API)
                 */
                __previnit(): void;
                /**
                * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
                * @preserve (Part of the public API)
                */
                __init(): void;
                /**
                * Is called of control is attached to the dom.
                * @preserve (Part of the public API)
                */
                __attach(): void;
                /**
                * Is called if control is detached from the dom.
                * @preserve (Part of the public API)
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @preserve (Part of the public API)
                */
                destroy(): void;
                /**
                 * Suspned ObjectResolver by key
                 * @param key
                 */
                protected __suspendObjectResolver(key: string): void;
                /**
                 * Returns the configured defaultInternalValue of the control property
                 * @param propertyName
                 * @template T Type of the default value
                 * @preserve (Part of the public API)
                 */
                protected getAttributeDefaultValueInternal<T = any>(propertyName: string): T | null;
                /**
                 * To keep compatibility with the legacy [Control].onFunctionResultChanged event all raised [Control].onFunctionResultChanged events without property 'noLegacyForwarding' set to true
                 * will be forwarded to [Control].onPropertyChanged and [Control].onPropertyChanged<[PropertyName]>
                 */
                /**
                 * Is raised if the <Control>.onFunctionResultChanged event is raised.
                 * @param event
                 */
                protected __onFunctionResultChanged(): (e: TcHmi.EventProvider.Event, data: string[], dataEx?: {
                    propertyName: string;
                    noLegacyForwarding?: boolean | undefined;
                    dirtyPaths?: string[] | undefined;
                }[] | undefined) => void;
                /**
                * Is raised if the <Control>.onPropertyChanged event is raised.
                * @param event
                */
                protected __onPropertyChanged(): (e: TcHmi.EventProvider.Event, data: {
                    propertyName: string;
                    noLegacyForwarding?: boolean;
                    dirtyPaths?: string[];
                }) => void;
                /**
                 * Is raised if the mouseover event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                 * @param event
                 */
                protected __onElementMouseOver(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                 * Is raised if the mouseenter event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                 * @param event
                 */
                protected __onElementMouseEnter(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the mousedown event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseDown(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the MouseMove event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseMove(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the mouseup event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseUp(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the click event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseClick(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the rightclick event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseRightClick(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the doubleclick event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseDoubleClick(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the mouseout event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseOut(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the mouseleave event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseLeave(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the wheel event is raised from the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementMouseWheel(event: EventProvider.IEventEntry): (e: MouseEvent) => void;
                /**
                * Is raised if the touchstart event is raised from  the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementTouchStart(event: EventProvider.IEventEntry): (e: TouchEvent) => void;
                /**
                * Is raised if the touchmove event is raised from  the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementTouchMove(event: EventProvider.IEventEntry): (e: TouchEvent) => void;
                /**
                * Is raised if the touchend event is raised from  the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementTouchEnd(event: EventProvider.IEventEntry): (e: TouchEvent) => void;
                /**
                * Is raised if the touchcancel event is raised from  the ".TcHmi_Controls_Beckhoff_TcHmiButton-action-area" element.
                * @param event
                */
                protected __onElementTouchCancel(event: EventProvider.IEventEntry): (e: TouchEvent) => void;
                /**
                 * Control Id
                 * @preserve (Part of the public API)
                 */
                getId(): string;
                /**
                 * Type of the control
                 * @preserve (Part of the public API)
                 */
                getType(): string;
                /**
                * Main HTML Element of the Control as jQuery object.
                * @preserve (Part of the public API)
                */
                getElement(): JQuery<HTMLElement>;
                /**
               * Precompiled copy of main JQuery element defining this control.
               * @preserve (Part of the public API)
               */
                getPcElement(): JQuery;
                /**
                 * Set __pcElement
                 * @param value
                 */
                __setPcElement(value: JQuery): void;
                /**
                 * List of attributes defined in html.
                 * @preserve (Part of the public API)
                 */
                getAttrs(): TcHmi.Controls.ControlAttributeList;
                /**
                 * Returns a boolean determining if the control was already destroyed.
                 * @preserve (Part of the public API)
                 */
                getIsDestroyed(): boolean;
                /**
                * List of classes of the control.
                * @preserve (Part of the public API)
                */
                getClassNames(): string[] | undefined;
                /**
                 * Defines the classes the control is part of.
                 * @param valueNew
                 */
                setClassNames(valueNew: string[] | null): void;
                /**
                * The watch callback for the classNames object resolver.
                */
                protected __onResolverForClassNamesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<string[]>) => void;
                /**
                 * Process classes.
                 */
                __processClassNames(): void;
                /**
                * AccessConfig
                * @preserve (Part of the public API)
                */
                getAccessConfig(): AccessControl[];
                /**
                 * Sets the new AccessConfig
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setAccessConfig(valueNew: AccessControl[] | null): void;
                /**
                * The watch callback for the accessConfig object resolver.
                */
                protected __onResolverForAccessConfigWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<AccessControl[]>) => void;
                /**
                 * Shows/hides the control and its children depending of the current 'observe' right and mark if operate is not allowed
                */
                __processAccessConfig(): void;
                /**
                * Sets the value of the trigger attribute.
                */
                setTrigger(valueNew: TcHmi.System.Trigger[] | null): void;
                /**
                * Returns the current trigger value.
                */
                getTrigger(): TcHmi.System.Trigger[] | null | undefined;
                /**
                * Processes the current trigger value.
                */
                protected __processTrigger(): void;
                /**
                  * Returns the mapping of virtual rights to real rights
                  * @preserve (Part of the public API)
                  */
                getVirtualControlRightMappings(): VirtualControlRightMapping[];
                /**
                 * Sets the new VirtualControlRightMapping
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setVirtualControlRightMappings(valueNew: VirtualControlRightMapping[] | null): void;
                /**
                * The watch callback for the virtualControlRightMappings object resolver.
                */
                protected __onResolverForVirtualControlRightMappingsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<VirtualControlRightMapping[]>) => void;
                /**
                * Reprocesses the access config
                */
                protected __processVirtualControlRightMappings(): void;
                /**
                * Returns the effective value of isEnabled based on own and parent isEnabled variable.
                */
                getIsEnabled(): boolean;
                /**
                * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
                * @preserve (Part of the public API)
                */
                setIsEnabled(valueNew: boolean | null): void;
                /**
                * Processes and publish the current isEnabled attribute value and of its children.
                */
                __processIsEnabled(): void;
                /**
                * Returns the Row index of the Control inside a TcHmiGrid Container.
                * @preserve (Part of the public API)
                */
                getGridRowIndex(): number | undefined;
                /**
                 * Sets a new GridRow index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setGridRowIndex(valueNew: number | null): void;
                /**
                 * Process GridRowIndex (no op in this base class)
                 */
                protected __processGridRowIndex(): void;
                /**
                 * Returns the Column index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */
                getGridColumnIndex(): number | undefined;
                /**
                 * Sets a new GridColumn index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setGridColumnIndex(valueNew: number | null): void;
                /**
                 * Process GridColumnIndex (no op in this base class)
                 */
                protected __processGridColumnIndex(): void;
                /**
                 * Returns a boolean determining if the control is attached to the dom.
                 * @preserve (Part of the public API)
                 */
                getIsAttached(): boolean;
                /**
                * Returns a boolean determining if the control should not be destroyed.
                * @preserve (Part of the public API)
                */
                getKeepAlive(): boolean;
                /**
                 * Sets __keepAlive
                 * @param value
                 */
                __setKeepAlive(value: boolean): void;
                /**
                 * Gets __keepAlive
                 * @param value
                 */
                __getKeepAlive(): boolean;
                /**
                * Returns a boolean determining if the control is a container control.
                * @preserve (Part of the public API)
                */
                getIsContainerControl(): boolean;
                /**
                * Parent control or null if there is (till now?) no parent control.
                * @preserve (Part of the public API)
                */
                getParent(): TcHmi.Controls.System.baseTcHmiControl | null;
                /**
                * Sets __parent
                * @param value
                */
                __setParent(value: TcHmi.Controls.System.baseTcHmiControl | null): void;
                /**
                 * Adds a child to a control.
                 * @param control
                 * @param pos
                 */
                __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 * Remove a child from a control.
                 * @param control
                 */
                __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                * Returns the current width of the Control.
                * @preserve (Part of the public API)
                */
                getWidth(): number | null | undefined;
                /**
                * Returns the current width unit of the Control.
                * @preserve (Part of the public API)
                */
                getWidthUnit(): "px" | "%" | undefined;
                /**
                * Returns the current width mode of the control.
                * @preserve (Part of the public API)
                */
                getWidthMode(): "Value" | "Parent" | "Content" | undefined;
                /**
                * Returns if inner widths depends on child controls.
                * @preserve (Part of the public API)
                */
                innerWidthDependsOnChilds(): boolean;
                /**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */
                updateInnerWidthDependingOnChilds(): void;
                /**
                * Returns the current height of the Control.
                * @preserve (Part of the public API)
                */
                getHeight(): number | null | undefined;
                /**
                * Returns the current height mode of the control.
                * @preserve (Part of the public API)
                */
                getHeightMode(): "Value" | "Parent" | "Content" | undefined;
                /**
                * Returns if inner heights depends on child controls.
                * @preserve (Part of the public API)
                */
                innerHeightDependsOnChilds(): boolean;
                /**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */
                updateInnerHeightDependingOnChilds(): void;
                /**
                * Returns the current height unit of the Control.
                */
                getHeightUnit(): "px" | "%" | undefined;
                /**
                * Returns the current top coordinate of the Control.
                * @preserve (Part of the public API)
                */
                getTop(): number | null | undefined;
                /**
                * Returns the current top coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                getTopUnit(): "px" | "%" | undefined;
                /**
                * Returns the current left coordinate of the Control.
                * @preserve (Part of the public API)
                */
                getLeft(): number | null | undefined;
                /**
                * Returns the current left coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                getLeftUnit(): "px" | "%" | undefined;
                /**
                * Returns the current bottom coordinate of the Control.
                * @preserve (Part of the public API)
                */
                getBottom(): number | null | undefined;
                /**
                * Returns the current bottom coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                getBottomUnit(): "px" | "%" | undefined;
                /**
                * Returns the current right coordinate of the Control.
                * @preserve (Part of the public API)
                */
                getRight(): number | null | undefined;
                /**
                * Returns the current right coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                getRightUnit(): "px" | "%" | undefined;
                /**
                * Returns the current minwidth value.
                * @preserve (Part of the public API)
                */
                getMinWidth(): number | null | undefined;
                /**
               * Returns the current minwidth unit.
               * @preserve (Part of the public API)
               */
                getMinWidthUnit(): "px" | "%" | undefined;
                /**
                * Returns the current minheight value.
                * @preserve (Part of the public API)
                */
                getMinHeight(): number | null | undefined;
                /**
                * Returns the current minheight unit.
                * @preserve (Part of the public API)
                */
                getMinHeightUnit(): "px" | "%" | undefined;
                /**
                * Returns the current maxwidth value.
                * @preserve (Part of the public API)
                */
                getMaxWidth(): number | null | undefined;
                /**
                * Returns the current maxwidth unit.
                * @preserve (Part of the public API)
                */
                getMaxWidthUnit(): "px" | "%" | undefined;
                /**
                * Returns the current maxheight value.
                * @preserve (Part of the public API)
                */
                getMaxHeight(): number | null | undefined;
                /**
                * Returns the current maxheight unit.
                * @preserve (Part of the public API)
                */
                getMaxHeightUnit(): "px" | "%" | undefined;
                /**
                * Returns the current rendered left value in pixel. Value is relative to parent element.
                * @preserve (Part of the public API)
                */
                getRenderedLeft(): number | null;
                /**
                * Returns the current rendered top value in pixel. Value is relative to parent element.
                * @preserve (Part of the public API)
                */
                getRenderedTop(): number | null;
                /**
                * Returns the current rendered right value in pixel. Value is relative to parent element.
                * @preserve (Part of the public API)
                */
                getRenderedRight(): number | null;
                /**
                * Returns the current rendered bottom value in pixel. Value is relative to parent element.
                * @preserve (Part of the public API)
                */
                getRenderedBottom(): number | null;
                /**
                * Returns the current rendered width value in pixel.
                * @preserve (Part of the public API)
                */
                getRenderedWidth(): number | null;
                /**
                * Returns the current rendered height value in pixel.
                * @preserve (Part of the public API)
                */
                getRenderedHeight(): number | null;
                __injectRenderedDimensions(layoutData: TcHmi.System.ControlManager.ControlLayoutData): void;
                /**
                 * Checks computed style of the main element for some css attributes
                 * Updates the cache and raises onFunctionResultChanged of corresponding getters
                 */
                protected __doAsyncWork(): void;
                /**
                * The control has to do some work to do in an animation request
                */
                protected __requestAsyncWork(): void;
                /**
                * Sets the value of the width attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setWidth(valueNew: number | null): void;
                /**
                * Processes the current width and width unit and trigger __processWidth in parent of this is Content sized.
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                 * Sets the unit of the width attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current width and width unit.
                */
                protected __processWidthUnit(): void;
                /**
                 * Sets the value of the width mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setWidthMode(valueNew: SizeMode | null): void;
                /**
                * Processes the current width and width unit.
                */
                protected __processWidthMode(): void;
                /**
               * Sets the value of the height attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */
                setHeight(valueNew: number | null): void;
                /**
                * Processes the current height and height unit and trigger __processHeight in parent of this is Content sized.
                * Adds fake height without height and only top/bottom definition
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                 * Sets the value of the height mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setHeightMode(valueNew: SizeMode | null): void;
                /**
                * Processes the current height and height unit.
                */
                protected __processHeightMode(): void;
                /**
                * Sets the unit of the height attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current height and height unit
                */
                protected __processHeightUnit(): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based).
                 * max-width overrides width, but min-width overrides max-width.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based).
                 * max-height overrides height, but min-height overrides max-height.
                 */
                __getContentHeight(): number | null;
                /**
               * Sets the value of the top attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */
                setTop(valueNew: number | null): void;
                /**
                * Processes the current top and top unit
                */
                protected __processTop(): void;
                /**
                 * Sets the unit of the top attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setTopUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current top and top unit
                */
                protected __processTopUnit(): void;
                /**
                * Sets the value of the left attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setLeft(valueNew: number | null): void;
                /**
                * Processes the current left and left unit value.
                */
                protected __processLeft(): void;
                /**
                 * Sets the unit of the left attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setLeftUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current left and left unit value.
                */
                protected __processLeftUnit(): void;
                /**
                 * Sets the value of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBottom(valueNew: number | null): void;
                /**
                * Processes the current bottom and bottom unit value.
                */
                protected __processBottom(): void;
                /**
                 * Sets the unit of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBottomUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current bottom and bottom unit value.
                */
                protected __processBottomUnit(): void;
                /**
                * Sets the value of the right attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setRight(valueNew: number | null): void;
                /**
                * Processes the current right and right unit value.
                */
                protected __processRight(): void;
                /**
                 * Sets the unit of the right attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setRightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current right and right unit value.
                */
                protected __processRightUnit(): void;
                /**
                 * Sets the value of the minwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setMinWidth(valueNew: number | null): void;
                /**
                * Processes the current minwidth and minwidth unit.
                */
                protected __processMinWidth(): void;
                /**
                * Sets the unit of the minwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setMinWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current width and width unit.
                */
                protected __processMinWidthUnit(): void;
                /**
                * Sets the value of the minheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setMinHeight(valueNew: number | null): void;
                /**
                * Processes the current minheight and minheight unit.
                */
                protected __processMinHeight(): void;
                /**
                 * Sets the unit of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setMinHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current height and height unit.
                */
                protected __processMinHeightUnit(): void;
                /**
                * Sets the value of the maxwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setMaxWidth(valueNew: number | null): void;
                /**
                * Processes the current maxwidth and maxwidth unit.
                */
                protected __processMaxWidth(): void;
                /**
                 * Sets the unit of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setMaxWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current width and width unit.
                */
                protected __processMaxWidthUnit(): void;
                /**
                 * Sets the value of the maxheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setMaxHeight(valueNew: number | null): void;
                /**
                * Processes the current maxheight and maxheight unit.
                */
                protected __processMaxHeight(): void;
                /**
               * Sets the unit of the maxheight attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */
                setMaxHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current height and height unit.
                */
                protected __processMaxHeightUnit(): void;
                /**
                * Returns the current zindex value.
                */
                getZindex(): number | null | undefined;
                /**
                * Sets the value of the zindex attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setZindex(valueNew: number | null): void;
                /**
                * Processes the current zindex value.
                */
                protected __processZindex(): void;
                /**
                * Returns the current opacity value.
                * Sets the value of the zindex attribute.
                * @preserve (Part of the public API)
                */
                getOpacity(): number | null | undefined;
                /**
                * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setOpacity(valueNew: number | null): void;
                /**
                * Processes the current opacity value.
                */
                protected __processOpacity(): void;
                /**
                * Sets the value of the visibility attribute.
                */
                setVisibility(valueNew: Visibility | null): void;
                /**
                * Returns the current visibility value.
                */
                getVisibility(): "Visible" | "Hidden" | "Collapsed" | undefined;
                /**
                * Processes the current visibility value.
                */
                protected __processVisibility(): void;
                /**
                * Returns the current transform value.
                * @preserve (Part of the public API)
                */
                getTransform(): Transform[] | null | undefined;
                /**
                 * Sets the value of the transform attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setTransform(valueNew: Transform[] | null): void;
                /**
                * The watch callback for the transform object resolver.
                */
                protected __onResolverForTransformWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Transform[]>) => void;
                /**
                * Processes the current transform value.
                */
                protected __processTransform(): void;
                /**
                 * Processes the current background attributes.
                 */
                protected __processAllBackground(): void;
                /**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */
                getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundColor(valueNew: Color | null): void;
                /**
                * The watch callback for the backgroundColor object resolver.
                */
                protected __onResolverForBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Processes the current background-color attribute.
                */
                protected __processBackgroundColor(): void;
                /**
                * Returns the current value of the member variable backgroundImage.
                * @preserve (Part of the public API)
                */
                getBackgroundImage(): string | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImage) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImage(valueNew: string | null): void;
                /**
                * Processes the current value of backgroundImage and forwards it to the target html container element.
                */
                protected __processBackgroundImage(): void;
                /**
                * Returns the current value of the member variable backgroundImagePadding.
                * @preserve (Part of the public API)
                */
                getBackgroundImagePadding(): FourSidedCss | null | undefined;
                /**
                * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
                * and calls the associated process function (processBackgroundImagePadding) after that.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setBackgroundImagePadding(valueNew: FourSidedCss | null): void;
                /**
                * The watch callback for the backgroundImagePadding object resolver.
                */
                protected __onResolverForBackgroundImagePaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                * Processes the current value of backgroundImagePadding and forwards it to the target span element in template html.
                * The current value of backgroundImagePadding is only forwarded if it is no binding expression.
                */
                protected __processBackgroundImagePadding(): void;
                /**
                * Returns the current value of the member variable backgroundImageWidth.
                * @preserve (Part of the public API)
                */
                getBackgroundImageWidth(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidth) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageWidth(valueNew: number | null): void;
                /**
                * Processes the current value of backgroundImageWidth and forwards it to the target html container element.
                */
                protected __processBackgroundImageWidth(): void;
                /**
                * Returns the current value of the member variable backgroundImageWidthUnit.
                * @preserve (Part of the public API)
                */
                getBackgroundImageWidthUnit(): "px" | "%" | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidthUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current value of backgroundImageWidth and backgroundImageWidth unit and forwards it to the target html container element.
                */
                protected __processBackgroundImageWidthUnit(): void;
                /**
                * Returns the current value of the member variable backgroundImageHeight.
                * @preserve (Part of the public API)
                */
                getBackgroundImageHeight(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeight) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageHeight(valueNew: number | null): void;
                /**
                * Processes the current value of backgroundImageHeight and forwards it to the target html container element.
                */
                protected __processBackgroundImageHeight(): void;
                /**
                * Returns the current value of the member variable backgroundImageHeightUnit.
                * @preserve (Part of the public API)
                */
                getBackgroundImageHeightUnit(): "px" | "%" | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeightUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Processes the current value of backgroundImageHeight and forwards it to the target html container element.
                */
                protected __processBackgroundImageHeightUnit(): void;
                /**
                * Returns the current value of horizontalBackgroundImageAligment.
                * @preserve (Part of the public API)
                */
                getBackgroundImageHorizontalAlignment(): "Left" | "Center" | "Right" | undefined;
                /**
                 * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
                /**
                * Processes the current backgroundImageHorizontalAlignment attribute value.
                */
                protected __processBackgroundImageHorizontalAlignment(): void;
                /**
                 * Returns the current value of backgroundImageVerticalAlignment.
                 * @preserve (Part of the public API)
                 */
                getBackgroundImageVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                 * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
                 * Possible Values: "Left", "Top", "Center"
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundImageVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                * Processes the current backgroundImageVerticalAlignment attribute value.
                */
                protected __processBackgroundImageVerticalAlignment(): void;
                /**
                * Returns the current border-color value.
                * @preserve (Part of the public API)
                */
                getBorderColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Sets the border-color attribute value and calls the associated process function (processBorderColor).
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setBorderColor(valueNew: Color | null): void;
                /**
                * The watch callback for the borderColor object resolver.
                */
                protected __onResolverForBorderColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Processes the current border-color attribute.
                */
                protected __processBorderColor(): void;
                /**
                * Returns the current border-width value.
                * @preserve (Part of the public API)
                */
                getBorderWidth(): BorderWidth | null | undefined;
                /**
                * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setBorderWidth(valueNew: BorderWidth | null): void;
                /**
                * The watch callback for the borderWidth object resolver.
                */
                protected __onResolverForBorderWidthWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BorderWidth>) => void;
                /**
                * Processes the current border-width attribute.
                */
                protected __processBorderWidth(): void;
                /**
                * Returns the current border-radius value.
                * @preserve (Part of the public API)
                */
                getBorderRadius(): BorderRadius | null | undefined;
                /**
                 * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBorderRadius(valueNew: BorderRadius | null): void;
                /**
                * The watch callback for the borderRadius object resolver.
                */
                protected __onResolverForBorderRadiusWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BorderRadius>) => void;
                /**
                * Processes the current border-radius attribute.
                */
                protected __processBorderRadius(): void;
                /**
                * Returns the current border-style value.
                * @preserve (Part of the public API)
                */
                getBorderStyle(): BorderStyle | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-border-type".
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBorderStyle(valueNew: BorderStyle | null): void;
                /**
                * The watch callback for the borderStyle object resolver.
                */
                protected __onResolverForBorderStyleWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BorderStyle>) => void;
                /**
                * Processes the current border-style attribute.
                */
                protected __processBorderStyle(): void;
                /**
                * Sets the internal reference to the attribute "data-tchmi-box-shadow".
                * @preserve (Part of the public API)
                */
                setBoxShadow(valueNew: BoxShadow[] | null): void;
                /**
                * The watch callback for the boxShadow object resolver.
                */
                protected __onResolverForBoxShadowWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BoxShadow[]>) => void;
                /**
                * Returns the current box-shadow value.
                * @preserve (Part of the public API)
                */
                getBoxShadow(): BoxShadow[] | null | undefined;
                /**
                * Processes the current box-shadow attribute.
                */
                protected __processBoxShadow(): void;
                /**
                * Returns the current value of tooltip.
                * @preserve (Part of the public API)
                */
                getTooltip(): string | null | undefined;
                /**
                * Sets the tooltip attribute and calls the associated process function (processTooltip).
                * @param valueNew
                * @preserve (Part of the public API)
                */
                setTooltip(valueNew: string | null): void;
                /**
                * Processes the current tooltip attribute value.
                */
                protected __processTooltip(): void;
            }
            namespace TcHmiControl {
                interface IDomEventObjCacheEntry {
                    event: EventProvider.IEventEntry;
                    domEventListener: TcHmiControl.IDomEventObj;
                }
                interface IDomEventObj {
                    eventName: keyof HTMLElementEventMap;
                    listener: EventListener | EventListenerObject;
                    options: EventListenerOptions | boolean;
                }
                interface IControlSpecificData {
                    'System.TcHmiControl.layoutData': TcHmi.System.ControlManager.ControlLayoutData;
                    /** Map with style name */
                    'System.TcHmiControl.changedProperties': Map<string, boolean>;
                }
            }
        }
    }
}

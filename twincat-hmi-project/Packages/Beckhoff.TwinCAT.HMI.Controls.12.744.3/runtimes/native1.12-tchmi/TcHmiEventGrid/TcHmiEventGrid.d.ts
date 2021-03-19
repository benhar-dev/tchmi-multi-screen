declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiEventGrid extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                protected __elementGridContainer: JQuery;
                protected __elementMenuBar: JQuery;
                protected __elementTypeToggles: JQuery;
                protected __elementSeverityToggles: JQuery;
                protected __elementOptions: JQuery;
                protected __elementMessageActions: JQuery;
                protected __elementFilterPopup: JQuery;
                protected __elementColumnsPopup: JQuery;
                protected __elementDetailsPopup: JQuery;
                protected __elementConfirmAllPopup: JQuery;
                protected __filter: Filter | null | undefined;
                protected __internalFilter: Filter;
                protected __noPayloadsFilter: Filter;
                protected __serverInterval: number | null | undefined;
                protected __columns: TcHmiEventGrid.Column[] | undefined;
                protected __internalColumns: TcHmiEventGrid.Column[];
                protected __allowDetailsPopup: boolean | undefined;
                protected __showMenuBar: boolean | undefined;
                protected __menuBarPosition: 'Top' | 'Bottom' | 'Left' | 'Right' | undefined;
                protected __buttonFontFamily: string | undefined;
                protected __buttonFontSize: number | undefined;
                protected __buttonFontSizeUnit: FontSizeUnit | undefined;
                protected __buttonFontStyle: FontStyle | undefined;
                protected __buttonFontWeight: FontWeight | undefined;
                protected __buttonHeight: number | undefined;
                protected __storage: Partial<TcHmiEventGrid.Storage> | undefined;
                protected __storageValidation: TcHmiEventGrid.StorageValidation;
                protected __datagrid: TcHmiDatagrid;
                protected __sortingInitialized: boolean;
                protected __headerFontFamilyInitialized: boolean;
                protected __headerFontSizeInitialized: boolean;
                protected __headerFontSizeUnitInitialized: boolean;
                protected __headerFontStyleInitialized: boolean;
                protected __headerFontWeightInitialized: boolean;
                protected __gridFontFamilyInitialized: boolean;
                protected __gridFontSizeInitialized: boolean;
                protected __gridFontSizeUnitInitialized: boolean;
                protected __gridFontStyleInitialized: boolean;
                protected __gridFontWeightInitialized: boolean;
                protected __headerHeightInitialized: boolean;
                protected __headerHeightUnitInitialized: boolean;
                protected __rowHeightInitialized: boolean;
                protected __typeToggles: Map<Server.Events.Type, TcHmiToggleButton | undefined>;
                protected __severityToggles: Map<Server.Events.Severity, TcHmiToggleButton | undefined>;
                protected __menuBarButtons: Map<string, TcHmiButton | undefined>;
                protected __buttonTooltips: {
                    message: string;
                    alarm: string;
                    verbose: string;
                    info: string;
                    warning: string;
                    error: string;
                    critical: string;
                    filter: string;
                    columns: string;
                    confirm: string;
                    confirmAll: string;
                };
                protected __canConfirm: boolean;
                protected __filterPopup: TcHmiEventGridPopups.FilterPopup | null;
                protected __columnsPopup: TcHmiEventGridPopups.ColumnsPopup | null;
                protected __detailsPopup: TcHmiEventGridPopups.DetailsPopup | null;
                protected __confirmAllPopup: TcHmiEventGridPopups.ConfirmAllPopup | null;
                protected __typesToShow: Map<Server.Events.Type, boolean>;
                protected __severitiesToShow: Map<Server.Events.Severity, boolean>;
                protected __themedIcons: {
                    types: Map<Server.Events.Type, TcHmiEventGrid.Icon | null>;
                    severities: Map<Server.Events.Severity, TcHmiEventGrid.Icon | null>;
                };
                protected __subscriptionId: number | null;
                protected __availableColumns: Dictionary<TcHmiDatagrid.Column>;
                protected __destroyersToCallOnDetach: DestroyFunction[];
                protected __onUserInGroupChangedDestroyer: DestroyFunction | null;
                protected __doubletapStartTime: number;
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
                 * Handles the onUserInGroupChanged event.
                 */
                protected __onUserInGroupChanged: () => void;
                /**
                 * Handles the onResized event of the control.
                 */
                protected __onResized: () => void;
                /**
                 * Handles the onThemeDataChanged event.
                 */
                protected __onThemeDataChanged: () => void;
                /**
                 * Creates an event handler for toggle state changed events of type toggle buttons.
                 * @param toggleButton  The toggle button for which to create an event handler.
                 * @param type          The type this event handler should control.
                 */
                protected __getTypeToggleStateChangedHandler(toggleButton: TcHmiToggleButton, type: Server.Events.Type): () => void;
                /**
                 * Creates an event handler for toggle state changed events of severity toggle buttons.
                 * @param toggleButton  The toggle button for which to create an event handler.
                 * @param severity      The severity this event handler should control.
                 */
                protected __getSeverityToggleStateChangedHandler(toggleButton: TcHmiToggleButton, severity: Server.Events.Severity): () => void;
                /**
                 * Handles the selectedItemChanged event of the datagrid.
                 */
                protected __onSelectedItemChanged: () => void;
                /**
                 * Handles the onPropertyChanged event of the datagrid.
                 */
                private __onDataGridPropertyChanged;
                /**
                 * Handles the onPressedEvent of the filter button.
                 */
                protected __onFilterPressed: () => void;
                /**
                 * Handles the onPressedEvent of the columns button.
                 */
                protected __onColumnsPressed: () => void;
                /**
                 * Handles the onPressed event of the confirm button.
                 */
                protected __onConfirmPressed: () => void;
                /**
                 * Handles the onPressed event of the confirmAll button.
                 */
                protected __onConfirmAllPressed: () => void;
                /**
                 * Handles double clicks on table rows.
                 */
                protected __onDoubleclick: (event: MouseEvent) => void;
                /**
                 * Handles touchstart events on table rows.
                 */
                protected __onTouchStart: (event: TouchEvent) => void;
                /**
                 * Handles scroll events.
                 */
                protected __onScroll: (event: Event) => void;
                /**
                 * Shows the details popup
                 */
                protected __showDetails(): void;
                /**
                 * Processes the currently seleceted datagrid item.
                 */
                protected __processSelectedItem(): void;
                /**
                 * Updates the subscription getting metadata for the eventgrid.
                 * @param unsubscribeOnly Should be set to true when this method is called from __detach. Prevents a new subscription being created after the existing subscription was unsubscribed.
                 */
                protected __updateSubscription(unsubscribeOnly?: boolean): void;
                /**
                 * Gets a handler that checks the incomming response for errors and executes the specified functions for each command.
                 * @param commands The commands that are expected to be present in the response, and their respective handlers.
                 */
                protected __getServerResponseHandler(commands: Map<Server.ICommand, (response: Server.ICommand, data: Server.IResultObject) => void>): (data: Server.IResultObject) => void;
                /**
                 * Gets the commands for the numbers in the toggle buttons.
                 */
                protected __getToggleButtonCommands(): Map<Server.ICommand<any, any>, (command: Server.ICommand, data: Server.IResultObject) => void>;
                /**
                 * Gets the command for all confirmable alarms.
                 */
                protected __getConfirmAllCommand(): [Server.ICommand, (command: Server.ICommand, data: Server.IResultObject) => void];
                /**
                 * Gets the filter for all confirmable alarms.
                 */
                protected __getConfirmAllFilter(): Filter;
                /**
                 * Reads the user preferences from localStorage and removes all entries whose stored value no longer match the output of their validation functions.
                 */
                protected __initStorage(): void;
                /**
                 * Returns the stored value associated with the given key for the current user.
                 * @param key The key to read.
                 */
                protected __getStoredValue<K extends keyof TcHmiEventGrid.Storage>(key: K): TcHmiEventGrid.Storage[K]['anonymousUser'];
                /**
                 * Sets a stored value for the current user if the value is not equal to the validation value or a value is currently set.
                 * @param key The key of the value to set.
                 * @param value The value to set.
                 * @param validationFunction A function name to use for validation. When the object is read from localStorage and the output of this function does not match the last known result, the value is deemed invalid.
                 */
                protected __setStoredValueWithValidation<K extends keyof TcHmiEventGrid.Storage, V extends Exclude<TcHmiEventGrid.Storage[K]['anonymousUser'], undefined>>(key: K, value: V): void;
                /**
                 * Removes a stored value for the current user.
                 * @param key The key of the value to remove.
                 */
                protected __removeStoredValue(key: keyof TcHmiEventGrid.Storage): void;
                /**
                 * Updates the themed resources, like event icons.
                 */
                protected __updateThemedResources(): void;
                /**
                 * Gets the themed icon values from the ThemeManager.
                 */
                protected __getThemedIcons(): {
                    types: Map<Server.Events.Type, TcHmiEventGrid.Icon | null>;
                    severities: Map<Server.Events.Severity, TcHmiEventGrid.Icon | null>;
                };
                /**
                 * Sets the columns value and calls the associated process function.
                 * @param valueNew The new value for columns.
                 */
                setColumns(valueNew: TcHmiEventGrid.Column[] | null): void;
                /**
                 * The watch callback for the columns object resolver.
                 */
                protected __onResolverForColumnsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiEventGrid.Column[]>) => void;
                /**
                 * Returns the current value of columns.
                 */
                getColumns(): TcHmiEventGrid.Column[] | undefined;
                /**
                 * Processes the current columns value.
                 */
                protected __processColumns(): void;
                /**
                 * Updates the columns of the datagrid.
                 * @param columns The names of the column definitions to set.
                 */
                protected __updateColumns(columns: TcHmiEventGrid.Column[]): void;
                /**
                 * Sets the filter value and calls the associated process function.
                 * @param valueNew The new value for filter.
                 */
                setFilter(valueNew: Filter | null): void;
                /**
                 * The watch callback for the filter object resolver.
                 */
                protected __onResolverForFilterWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Filter>) => void;
                /**
                 * Returns the current value of filter.
                 */
                getFilter(): Filter | null | undefined;
                /**
                 * Processes the current filter value.
                 */
                protected __processFilter(): void;
                /**
                 * Updates the internal filter.
                 * @param filter The filter to set.
                 */
                protected __updateFilter(filter: Filter): void;
                /**
                 * Updates the filter of the datagrid.
                 */
                protected __updateDatagridFilter(): void;
                /**
                 * Sets the sorting value.
                 * @param valueNew The new value for sorting
                 */
                setSorting(valueNew: TcHmiDatagrid.SortingInfo[] | null): void;
                /**
                 * Returns the current value of sorting.
                 */
                getSorting(): TcHmiDatagrid.SortingInfo[] | undefined;
                /**
                 * Sets the serverInterval value and calls the associated process function.
                 * @param valueNew The new value for serverInterval.
                 */
                setServerInterval(valueNew: number | null): void;
                /**
                 * Returns the current value of serverInterval.
                 */
                getServerInterval(): number | null | undefined;
                /**
                 * Processes the current serverInterval value.
                 */
                protected __processServerInterval(): void;
                /**
                 * Sets the headerFontFamily value.
                 * @param valueNew The new value for headerFontFamily
                 */
                setHeaderFontFamily(valueNew: string | null): void;
                /**
                 * Returns the current value of headerFontFamily.
                 */
                getHeaderFontFamily(): string | null | undefined;
                /**
                 * Sets the headerFontSize value.
                 * @param valueNew The new value for headerFontSize
                 */
                setHeaderFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of headerFontSize.
                 */
                getHeaderFontSize(): number | undefined;
                /**
                 * Sets the headerFontSizeUnit value.
                 * @param valueNew The new value for headerFontSizeUnit
                 */
                setHeaderFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of headerFontSizeUnit.
                 */
                getHeaderFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Sets the headerFontStyle value.
                 * @param valueNew The new value for headerFontStyle
                 */
                setHeaderFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of headerFontStyle.
                 */
                getHeaderFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Sets the headerFontWeight value.
                 * @param valueNew The new value for headerFontWeight
                 */
                setHeaderFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of headerFontWeight.
                 */
                getHeaderFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Sets the gridFontFamily value.
                 * @param valueNew The new value for gridFontFamily
                 */
                setGridFontFamily(valueNew: string | null): void;
                /**
                 * Returns the current value of gridFontFamily.
                 */
                getGridFontFamily(): string | null | undefined;
                /**
                 * Sets the gridFontSize value.
                 * @param valueNew The new value for gridFontSize
                 */
                setGridFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of gridFontSize.
                 */
                getGridFontSize(): number | undefined;
                /**
                 * Sets the gridFontSizeUnit value.
                 * @param valueNew The new value for gridFontSizeUnit
                 */
                setGridFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of gridFontSizeUnit.
                 */
                getGridFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Sets the gridFontStyle value.
                 * @param valueNew The new value for gridFontStyle
                 */
                setGridFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of gridFontStyle.
                 */
                getGridFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Sets the gridFontWeight value.
                 * @param valueNew The new value for gridFontWeight
                 */
                setGridFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of gridFontWeight.
                 */
                getGridFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Sets the headerHeight value.
                 * @param valueNew The new value for headerHeight
                 */
                setHeaderHeight(valueNew: number | null): void;
                /**
                 * Returns the current value of headerHeight.
                 */
                getHeaderHeight(): number | undefined;
                /**
                 * Sets the headerHeightUnit value.
                 * @param valueNew The new value for headerHeightUnit
                 */
                setHeaderHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Returns the current value of headerHeightUnit.
                 */
                getHeaderHeightUnit(): "px" | "%" | undefined;
                /**
                 * Sets the rowHeight value.
                 * @param valueNew The new value for rowHeight
                 */
                setRowHeight(valueNew: number | null): void;
                /**
                 * Returns the current value of rowHeight.
                 */
                getRowHeight(): number | undefined;
                /**
                 * Returns the current value of rowHeightUnit.
                 */
                getRowHeightUnit(): string;
                /**
                 * Sets the allowDetailsPopup value and calls the associated process function.
                 * @param valueNew The new value for allowDetailsPopup.
                 */
                setAllowDetailsPopup(valueNew: boolean | null): void;
                /**
                 * Returns the current value of allowDetailsPopup.
                 */
                getAllowDetailsPopup(): boolean | undefined;
                /**
                 * Processes the current allowDetailsPopup value.
                 */
                protected __processAllowDetailsPopup(): void;
                /**
                 * Sets the showMenuBar value and calls the associated process function.
                 * @param valueNew The new value for showMenuBar.
                 */
                setShowMenuBar(valueNew: boolean | null): void;
                /**
                 * Returns the current value of showMenuBar.
                 */
                getShowMenuBar(): boolean | undefined;
                /**
                 * Processes the current showMenuBar value.
                 */
                protected __processShowMenuBar(): void;
                /**
                 * Sets the menuBarPosition value and calls the associated process function.
                 * @param valueNew The new value for menuBarPosition.
                 */
                setMenuBarPosition(valueNew: 'Top' | 'Bottom' | 'Left' | 'Right' | null): void;
                /**
                 * Returns the current value of menuBarPosition.
                 */
                getMenuBarPosition(): "Top" | "Bottom" | "Left" | "Right" | undefined;
                /**
                 * Processes the current menuBarPosition value.
                 */
                protected __processMenuBarPosition(): void;
                /**
                 * Sets the buttonFontFamily value and calls the associated process function.
                 * @param valueNew The new value for buttonFontFamily.
                 */
                setButtonFontFamily(valueNew: string | null): void;
                /**
                 * Returns the current value of buttonFontFamily.
                 */
                getButtonFontFamily(): string | undefined;
                /**
                 * Processes the current buttonFontFamily value.
                 */
                protected __processButtonFontFamily(): void;
                /**
                 * Sets the buttonFontSize value and calls the associated process function.
                 * @param valueNew The new value for buttonFontSize.
                 */
                setButtonFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of buttonFontSize.
                 */
                getButtonFontSize(): number | undefined;
                /**
                 * Processes the current buttonFontSize value.
                 */
                protected __processButtonFontSize(): void;
                /**
                 * Sets the buttonFontSizeUnit value and calls the associated process function.
                 * @param valueNew The new value for buttonFontSizeUnit.
                 */
                setButtonFontSizeUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Returns the current value of buttonFontSizeUnit.
                 */
                getButtonFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current buttonFontSizeUnit value.
                 */
                protected __processButtonFontSizeUnit(): void;
                /**
                 * Sets the buttonFontStyle value and calls the associated process function.
                 * @param valueNew The new value for buttonFontStyle.
                 */
                setButtonFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of buttonFontStyle.
                 */
                getButtonFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current buttonFontStyle value.
                 */
                protected __processButtonFontStyle(): void;
                /**
                 * Sets the buttonFontWeight value and calls the associated process function.
                 * @param valueNew The new value for buttonFontWeight.
                 */
                setButtonFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of buttonFontWeight.
                 */
                getButtonFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current buttonFontWeight value.
                 */
                protected __processButtonFontWeight(): void;
                /**
                 * Sets the buttonHeight value and calls the associated process function.
                 * @param valueNew The new value for buttonHeight.
                 */
                setButtonHeight(valueNew: number | null): void;
                /**
                 * Returns the current value of buttonHeight.
                 */
                getButtonHeight(): number | undefined;
                /**
                 * Processes the current buttonHeight value.
                 */
                protected __processButtonHeight(): void;
                /**
                 * Returns the current value of buttonHeightUnit.
                 */
                getButtonHeightUnit(): string;
                /**
                 * Flexbox has a bug in all major browsers, where the width of a flexbox column does not grow when its child elements wrap. This method fixes that by setting min-width explicitly.
                 */
                protected __fixVerticalMenuBarWidth(): void;
                /**
                 * Returns the currently selected event.
                 */
                getSelectedEvent(): Server.Events.Message<Dictionary<any>> | Server.Events.Alarm<Dictionary<any>> | Server.Events.PayloadEvent<any> | null;
                /**
                 * Processes the current enabled status.
                 */
                __processIsEnabled(): void;
                /**
                 * Processes the current access config.
                 */
                __processAccessConfig(): void;
                /**
                 * Hides all popups.
                 */
                protected __hideAllPopups(): void;
                /**
                 * Sets the internal canConfirm variable. This should not be called from outside the control but needs to be public so the confirmAll popup can call it.
                 * @param value Whether the current user has the necessary rights to confirm alarms.
                 */
                __setCanConfirm(value: boolean): void;
                /**
                 * Gets the internal canConfirm variable.
                 */
                __getCanConfirm(): boolean;
            }
            module TcHmiEventGrid {
                interface Column {
                    columnName: string;
                    label?: string;
                    width?: number;
                    widthUnit?: DimensionUnit;
                    sortable?: boolean;
                }
                interface Icon {
                    imagePath: string;
                    width: number;
                    height: number;
                }
                interface Storage {
                    filter: StorageItem<Filter, Filter>;
                    columns: StorageItem<Column[], Column[]>;
                }
                interface StorageItem<V, A> {
                    validation: {
                        function: string;
                        expectedResult: A | undefined;
                    };
                    anonymousUser?: V;
                    users?: Dictionary<V>;
                }
                type StorageValidation = {
                    [K in keyof Storage]: {
                        function: Storage[K]['validation']['function'];
                        expectedResult: Storage[K]['validation']['expectedResult'] | undefined;
                    };
                };
            }
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A basic popup. No controls are instatiated
         */
        abstract class Popup {
            /**
             * Creates a new Popup.
             * @param element The HTML element that hosts the popup.
             * @param name    The name of the popup. Used for control instantiation.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
            protected __name: string;
            protected __parentControl: TcHmiEventGrid;
            protected __element: HTMLElement;
            protected __elementContent: HTMLDivElement;
            protected __elementFooter: HTMLDivElement;
            protected __eventDestroyers: DestroyFunction[];
            protected __isShowing: boolean;
            /**
             * Shows the popup.
             */
            show(): void;
            /**
             * Hides the popup.
             */
            hide(): void;
            /**
             * Destroys the popup and all its controls.
             */
            destroy(): void;
            isShowing(): boolean;
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A basic settings popup. This popup contains an OK and a Cancel button.
         */
        abstract class SettingsPopup<S> extends Popup {
            /**
             * Creates a new SettingsPopup.
             * @param element The HTML element that hosts the popup.
             * @param name    The name of the popup. Used for control instantiation.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
            protected __resetButton: TcHmiButton;
            protected __resetHandlers: (() => void)[];
            protected __okHandlers: (() => void | boolean)[];
            protected __cancelHandlers: (() => void | boolean)[];
            protected abstract __settings: S;
            protected __updateRequired: boolean;
            /**
             * Handles the pressed event of a button.
             */
            protected __onButtonPressed(handlers: (() => void | boolean)[], hide: boolean): void;
            /**
             * Registers a handler function for presses of the Reset button. Returns a function to unregister the handler.
             * @param handler The handler to register.
             */
            registerResetButtonHandler(handler: () => void): () => void;
            /**
             * Registers a handler function for presses of the OK button. Returns a function to unregister the handler.
             * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
             */
            registerOkButtonHandler(handler: () => void | boolean): () => void;
            /**
             * Registers a handler function for presses of the Cancel button. Returns a function to unregister the handler.
             * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
             */
            registerCancelButtonHandler(handler: () => void | boolean): () => void;
            /**
             * Updates the settings this popup should modify.
             * @param settings The new settings.
             * @param resetable Whether the reset button should be enabled or disabled.
             */
            update(settings: S, resetable?: boolean): void;
            /**
             * Gets the current settings.
             */
            getSettings(): S;
            /**
             * Checks if an update of the settings is required.
             */
            requiresUpdate(): boolean;
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A popup for configuring the columns of the event grid.
         */
        class ColumnsPopup extends SettingsPopup<TcHmiEventGrid.Column[]> {
            /**
             * Creates a new ColumnsPopup.
             * @param element The HTML element that hosts the popup.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, control: TcHmiEventGrid);
            protected __settings: TcHmiEventGrid.Column[];
            protected __elementAvailableColumns: HTMLElement;
            protected __elementSelectedColumns: HTMLElement;
            protected __elementColumnName: HTMLElement;
            protected __elementColumnLabel: HTMLElement;
            protected __upButton: TcHmiButton;
            protected __downButton: TcHmiButton;
            protected __widthTextbox: TcHmiTextbox;
            protected __widthUnitCombobox: TcHmiCombobox;
            protected __nameTextbox: TcHmiTextbox;
            protected __labelTextbox: TcHmiTextbox;
            protected __sortableCheckbox: TcHmiCheckbox;
            protected __availableColumns: List<{
                name: string;
                element: HTMLElement;
            }>;
            protected __selectedColumns: List<{
                name: string;
                element: HTMLElement;
            }>;
            protected __columns: Dictionary<{
                label: string;
                order: number;
                allowSortable: boolean;
            }>;
            protected __activeElement: HTMLElement | null;
            protected __activeColumn: TcHmiEventGrid.Column | null;
            /**
             * Destroys the popup and all its controls. Also removes all DOM event handlers
             */
            destroy(): void;
            /**
             * Updates the column configuration.
             * @param columns The current column configuration.
             * @param resetable Whether the reset button should be enabled or disabled.
             */
            update(columns: TcHmiEventGrid.Column[], resetable: boolean): void;
            /**
             * Handles clicks inside the availableColumns element.
             * @param event The click event.
             */
            protected __onAvailableColumnClick: (event: MouseEvent) => void;
            /**
             * Handles clicks inside the selectedColumns element.
             * @param event The click event.
             */
            protected __onSelectedColumnClick: (event: MouseEvent) => void;
            /**
             * Handles the pressed event of the up button.
             */
            protected __onUpPressed: () => void;
            /**
             * Handles the pressed event of the down button.
             */
            protected __onDownPressed: () => void;
            /**
             * Handles the textChanged event of the width textbox
             */
            protected __onWidthChanged: () => void;
            /**
             * Handles the selectionChanged event of the width unit combobox
             */
            protected __onWidthUnitChanged: () => void;
            /**
             * Handles the textChanged event of the name textbox
             */
            protected __onNameChanged: () => void;
            /**
             * Handles the textChanged event of the label textbox
             */
            protected __onLabelChanged: () => void;
            /**
             * Handles the toggleStateChanged event of the sortable checkbox
             */
            protected __onSortableChanged: () => void;
            /**
             * Marks a column element as active.
             * @param element The element to activate.
             */
            protected __activateColumn(element: HTMLElement | null): void;
            /**
             * Updates the select, deselect, up, down buttons according to the currently active column.
             */
            protected __updateButtons(): void;
            /**
             * Updates the column properties controls according to the currently active column.
             */
            protected __updateColumnProperties(): void;
            /**
             * Creates an element representing a column.
             * @param label The label of the column.
             */
            protected __createColumnDiv(label: string): HTMLDivElement;
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A popup for configuring the filter of the event grid.
         */
        class FilterPopup extends SettingsPopup<Filter> {
            /**
             * Creates a new FilterPopup.
             * @param element The HTML element that hosts the popup.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, control: TcHmiEventGrid);
            protected __settings: Filter;
            protected __elementFilterTableHeader: HTMLElement;
            protected __elementIndentationHeader: HTMLElement;
            protected __elementFilterTable: HTMLElement;
            protected __elementFilterTableBody: HTMLElement;
            protected __removeButton: TcHmiButton;
            protected __groupButton: TcHmiButton;
            protected __ungroupButton: TcHmiButton;
            protected __schemaInfo: FilterPopup.SchemaInfo;
            protected __localizableEnums: FilterPopup.PathInfo[];
            protected __domainPaths: Map<string, FilterPopup.PathInfo>;
            protected __rows: FilterPopup.RowData[];
            protected __selectedRows: FilterPopup.SelectedRow[];
            protected __groupInfo: {
                parent: FilterPopup.FilterNesting;
                toGroup: (Comparison | Filter)[];
            } | null;
            protected __ungroupInfo: {
                parent: FilterPopup.FilterNesting;
                toUngroup: FilterPopup.FilterNesting;
            } | null;
            protected __onScroll: (event: Event) => void;
            protected __onLocaleChangedDestroyer: DestroyFunction | null;
            protected __onLocaleChanged: () => void;
            protected __localizeRequestId: number | null;
            protected __listDomainsSubscriptionId: number | null;
            /**
             * Updates the filter configuration.
             * @param filter The current filter configuration.
             * @param resetable Whether the reset button should be enabled or disabled.
             */
            update(filter: Filter, resetable: boolean): void;
            /**
             * Shows the popup.
             */
            show(): void;
            /**
             * Hides the popup and clears the content of the table if necessary.
             */
            hide(): void;
            /**
             * Destroys the popup and all its controls.
             */
            destroy(): void;
            /**
             * Clears the content of the table.
             */
            protected __clear(): void;
            /**
             * Creates a new row for the filter configuration table.
             * @param indentation The indentation levels and whether this row marks the beginnig, end or middle of an indentation.
             * @param comparison The comparison to configure in this row.
             * @param logic The logic to configure in this row.
             */
            protected __createRow(indentation: ('first' | 'middle' | 'last')[], parent: FilterPopup.FilterNesting, comparison: Comparison, logic?: LogicOperator): HTMLTableRowElement;
            /**
             * Updates the controls for comparator and value after path has been changed or row has been created.
             * @param row An object containing the filter objects, table cell elements and controls
             */
            protected __updateControls(row: FilterPopup.RowData): void;
            /**
             * Gets the pathInfo for a given path.
             * @param path The path to get info for.
             */
            protected __getPathInfo(path?: string): FilterPopup.PathInfo | null;
            /**
             * Adds the given row to the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
             * @param row The row to select
             */
            protected __selectRow(row: FilterPopup.SelectedRow): void;
            /**
             * Removes the given row from the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
             * @param row The row to deselect
             */
            protected __deselectRow(row: FilterPopup.SelectedRow): void;
            /**
             * Adds a new row below the lowest selected row or at the end of the table.
             */
            protected __add(): void;
            /**
             * Removes the selected rows.
             */
            protected __remove(): void;
            /**
             * Groups the selected rows if possible.
             */
            protected __group(): void;
            /**
             * Ungroups the selected rows if possible.
             */
            protected __ungroup(ungroupInfo: {
                parent: FilterPopup.FilterNesting;
                toUngroup: FilterPopup.FilterNesting;
            }, rows: FilterPopup.SelectedRow[]): void;
            /**
             * Enables/disables remove, group and ungroup buttons according to currently selected rows.
             */
            protected __processSelection(): void;
            /**
             * Resizes indentation header to match the table content.
             */
            protected __resizeIndentationHeader(): void;
            /**
             * Generates a string consisting of the parentControlId, the name of the popup and a guid to be used as a control id.
             */
            protected __newControlId(): string;
            /**
             * Clones a nesting object while leaving references to filters intact
             * @param nesting The object to clone
             */
            protected __cloneNesting(nesting: FilterPopup.FilterNesting): FilterPopup.FilterNesting;
            /**
             * Parses a JsonSchema into an object detailing which paths are available with which comparators and values.
             * @param schema The JsonSchema to parse.
             */
            protected __parseSchema(schema: JsonSchema | null): {
                schemaInfo: FilterPopup.SchemaInfo;
                localizationInfo: FilterPopup.PathInfo[];
                domainPaths: string[];
            };
            /**
             * Localizes enum labels and updates comboboxes using them.
             */
            protected __localizeEnumLabels(): void;
            /**
             * Subscribes to ListDomains and updates the schemaInfo, if paths containing "domain" exist in the schemaInfo.
             */
            protected __subscribeListDomains(): void;
        }
        module FilterPopup {
            interface SchemaInfo {
                availablePaths: Map<string, PathInfo>;
                freePath: PathInfo | null;
                availableLogic: string[];
            }
            interface PathInfo {
                comparators: string[];
                values: any[];
                labels: Map<string | number, string>;
                localizedLabels: Map<string | number, string>;
                allowFreeValue: boolean;
                valueIsDate: boolean;
                valueType: 'string' | 'number' | 'integer' | 'boolean' | 'any';
                nullable: boolean;
                isSuggestion: boolean;
            }
            interface RowData {
                row: HTMLTableRowElement;
                logicOperator?: LogicOperator;
                comparison: Comparison;
                parent: FilterNesting;
                selection: {
                    control: TcHmiCheckbox;
                    destroyer: DestroyFunction;
                };
                logic?: {
                    control: TcHmiCombobox;
                    destroyer: DestroyFunction;
                };
                path: {
                    control: TcHmiCombobox | TcHmiTextbox | null;
                    destroyer: DestroyFunction | null;
                };
                comparator: {
                    cell: HTMLTableCellElement;
                    control: TcHmiCombobox | null;
                    destroyer: DestroyFunction | null;
                };
                value: {
                    cell: HTMLTableCellElement;
                    control: TcHmiCombobox | TcHmiTextbox | null;
                    destroyer: DestroyFunction | null;
                    dateTimePicker: TcHmiDateTimePicker | null;
                    dateTimePickerEventDestroyer: DestroyFunction | null;
                    dateTimeButton: TcHmiButton | null;
                    dateTimeButtonEventDestroyer: DestroyFunction | null;
                };
            }
            interface SelectedRow {
                rowElement: HTMLTableRowElement;
                comparison: Comparison;
                parent: FilterNesting;
            }
            interface FilterNesting {
                filter: Filter;
                parent: FilterNesting | null;
            }
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A popup showing details of events. Contains a close button.
         */
        class DetailsPopup extends Popup {
            /**
             * Creates a new DetailsPopup.
             * @param element The HTML element that hosts the popup.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, control: TcHmiEventGrid);
            protected __event: Server.Events.Event | null;
            protected __confirmButton: TcHmiButton;
            /**
             * Updates the content of the popup.
             * @param event The event whose details should be shown.
             */
            update(event: Server.Events.Event): void;
            /**
             * Returns the currently shown event.
             */
            getEvent(): Server.Events.Message<Dictionary<any>> | Server.Events.Alarm<Dictionary<any>> | Server.Events.PayloadEvent<any> | null;
            __setCanConfirm(value: boolean): void;
        }
    }
}
declare module TcHmi {
    module Controls.Beckhoff.TcHmiEventGridPopups {
        /**
         * A popup asking for confirmation berfore confirming all alarms. Contains a yes and a no button.
         */
        class ConfirmAllPopup extends Popup {
            /**
             * Creates a new ConfirmAllPopup.
             * @param element The HTML element that hosts the popup.
             * @param control The control owning the popup.
             */
            constructor(element: HTMLElement, control: TcHmiEventGrid);
            protected __alarms: Server.Events.Alarm[];
            protected __datagrid: TcHmiDatagrid;
            protected __yesButton: TcHmiButton;
            protected __elementAlarmCount: Element;
            /**
             * Updates the content of the popup.
             * @param event The event whose details should be shown.
             */
            update(alarms: Server.Events.Alarm[]): void;
            /**
             * Returns the currently shown alarms.
             */
            getAlarms(): Server.Events.Alarm<Dictionary<any>>[];
        }
    }
}

declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiDatagrid extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Refernce to the outer container element */
                protected __elementOuter: JQuery;
                /** Reference to the div containing the header table */
                protected __elementHeaderScroll: JQuery;
                /** Reference to the header table */
                protected __elementHeaderTable: JQuery;
                /** Reference to the div containig the main table */
                protected __elementDataScroll: JQuery;
                /** Reference to the main table body */
                protected __elementDataTableBody: JQuery;
                /** Internal reference to the attribute "data-tchmi-src-data" */
                protected __srcData: any[] | undefined;
                protected __oldSrcData: any[] | undefined;
                protected __overriddenSrcData: any[] | null | undefined;
                /** Internal reference to the attribute "data-tchmi-data-symbol" */
                protected __dataSymbol: Symbol<any[]> | undefined | null;
                protected __destroyDataSymbolWatch: DestroyFunction | null;
                protected __pagingInfo: {
                    usePaging: boolean;
                    subscriptionId: number | null;
                    buffer: number;
                    theoraticalOffset: number;
                    actualOffset: number;
                    filterMap: number[];
                    timing: {
                        isScrolling: boolean;
                        timeoutID: number | null;
                        lastRequestTime: number;
                        lastUpdateTime: number;
                        minTimeout: number;
                        responseLatencies: number[];
                        updateTimings: number[];
                        firstResponsePending: boolean;
                    };
                };
                protected __dataSymbolTransform: ((rowData: any) => any) | null;
                /** Internal reference to the attribute "data-tchmi-src-column" */
                protected __srcColumn: TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn | undefined;
                /** Internal reference to the attribute "data-tchmi-sorting" */
                protected __sorting: TcHmiDatagrid.SortingInfo[] | undefined;
                protected __internalSorting: TcHmiDatagrid.SortingInfo[];
                /** Internal reference to the attribute "data-tchmi-filter" */
                protected __filter: Filter | null | undefined;
                protected __filterInstance: TcHmi.System.Filter | null;
                protected __rowClassesProvider: TcHmi.IFunction | undefined;
                /** Internal reference to the attribute "data-tchmi-src-column" */
                protected __internalSrcColumn: (TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn)[];
                /**  Internal reference to the attribute " data-tchmi-header-height" */
                protected __headerHeight: number | undefined;
                /**  Internal reference to the attribute " data-tchmi-header-height-unit" */
                protected __headerHeightUnit: DimensionUnit | undefined;
                /** Internal reference to the attribute "data-tchmi-header-cell-padding" */
                protected __headerCellPadding: TcHmi.FourSidedCss | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-row-height" */
                protected __rowHeight: number | undefined;
                /** Internal reference to the attribute "data-tchmi-text-color". */
                protected __headerTextColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-row-numbers-text-color". */
                protected __rowNumbersTextColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute "data-tchmi-table-border-color". */
                protected __tableBorderColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute "data-tchmi-table-border-width". */
                protected __tableBorderWidth: number | undefined;
                /** Internal reference to the attribute "data-tchmi-table-border-style". */
                protected __tableBorderStyle: TcHmi.BorderStyle | null | undefined;
                /** Internal reference to the attribute "data-tchmi-header-background" */
                protected __headerBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute "data-tchmi-row-numbers-background" */
                protected __rowNumbersBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute "data-tchmi-cell-content-padding" */
                protected __cellContentPadding: TcHmi.FourSidedCss | null | undefined;
                protected __showRowNumbers: boolean | undefined;
                protected __rowNumbersResizable: boolean | undefined;
                protected __rowNumbersWidth: number | undefined;
                protected __rowNumbersWidthUnit: DimensionUnit | undefined;
                protected __rowNumbersHorizontalAlignment: TcHmi.HorizontalAlignment | undefined;
                protected __rowNumbersVerticalAlignment: TcHmi.VerticalAlignment | undefined;
                protected __rowNumbersCellPadding: TcHmi.FourSidedCss | null | undefined;
                protected __headerFontFamily: FontFamily | null | undefined;
                protected __headerFontSize: number | undefined;
                protected __headerFontSizeUnit: FontSizeUnit | undefined;
                protected __headerFontStyle: FontStyle | undefined;
                protected __headerFontWeight: FontWeight | undefined;
                protected __gridFontFamily: FontFamily | null | undefined;
                protected __gridFontSize: number | undefined;
                protected __gridFontSizeUnit: FontSizeUnit | undefined;
                protected __gridFontStyle: FontStyle | undefined;
                protected __gridFontWeight: FontWeight | undefined;
                protected __rowNumbersFontFamily: FontFamily | null | undefined;
                protected __rowNumbersFontSize: number | undefined;
                protected __rowNumbersFontSizeUnit: FontSizeUnit | undefined;
                protected __rowNumbersFontStyle: FontStyle | undefined;
                protected __rowNumbersFontWeight: FontWeight | undefined;
                /** Stores information about the current lock state and which cell is locked */
                protected __lockState: {
                    row: number;
                    column: number;
                    propertyName: string | null;
                    rowElement: HTMLTableRowElement;
                    editStarted: boolean;
                } | null;
                /** Header width and minWidth for each column including row numbers */
                protected __columnWidths: {
                    width: number;
                    widthUnit: "px" | "%";
                    pixelWidth: number;
                    minWidth: number;
                    minWidthUnit: "px" | "%";
                    resizable: boolean;
                }[];
                protected __draggingInfo: {
                    isDragging: boolean;
                    columnIndex: number | null;
                    startingPoint: number | null;
                    offset: number | null;
                };
                protected __lastRemovedSorting: {
                    name?: string;
                    position: number;
                } | null;
                protected __filterSortMap: number[] | null;
                protected __dataLength: number;
                protected __sortTouches: TcHmiDatagrid.SortTouchInfo[];
                /** Returns if the srcData has changed. */
                protected __srcDataHasChanged: boolean;
                /** Stores the selected cell */
                protected __selectedCell: {
                    rowIndex: number | null;
                    columnIndex: number;
                } | null;
                protected __scrollInfo: {
                    scrollTop: number;
                    scrollLeft: number;
                    firstIndex: number;
                    oldFirstIndex: number;
                    rowCount: number;
                    oldRowCount: number;
                    buffer: number;
                };
                /** Stores the callback function for the resize event */
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __movedEventDestroyEvent: DestroyFunction | null;
                protected __comboboxDropdowns: Dictionary<HTMLElement>;
                protected __selectedCombobox: {
                    cell: HTMLTableCellElement;
                    column: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn;
                    row: number;
                    combobox: HTMLElement;
                    dropdown: HTMLElement;
                } | null;
                protected __resizeElementMinWidth: number;
                protected __contentWidth: number | null;
                protected __contentHeight: number | null;
                protected __storage: Partial<TcHmiDatagrid.Storage> | undefined;
                protected __storageValidation: TcHmiDatagrid.StorageValidation;
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
                private __recalcRowCount;
                /**
                 * Returns an event handler function for the onResized event.
                 */
                protected __onResized(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                /**
                 * Recalculates the widths of all columns.
                 */
                protected __recalcAllColumnWidths(force?: boolean): void;
                /**
                 * Clears the header and builds a new one
                 */
                protected __buildHeader(): void;
                /**
                 * Clears the table data and fills the table with the current srcData
                 */
                protected __updateTable(updateType: TcHmiDatagrid.__updateTableType): void;
                /**
                 * Returns an event handler for the mousedown event of the dropdown elements.
                 */
                protected __onMousedown: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the click event of the dropdown elements.
                 */
                protected __onItemClick: (event: MouseEvent) => void;
                /**
                 * Opens the dropdown of the combobox in the specified cell.
                 * @param cell The cell containing the combobox.
                 */
                protected __openCombobox(cell: HTMLTableCellElement): void;
                /**
                 * Closes the open combobox.
                 */
                protected __closeCombobox(): void;
                protected __resizeDropdownBoxCb: () => void;
                /**
               * Is called from updateTable for each row to append it to the tbody element.
               * @param data The data set with the information about the row.
               * @param body The body to append the row.
               * @param row The information about the position of object. Number between 0 and srcData.length -1
               */
                protected __createRow(dataIndex: number, row: number, rowToRecycle?: HTMLTableRowElement, lockedCell?: number): HTMLTableRowElement;
                /**
                 * Fills the given cell with the correct control and the given value.
                 * @param elementCell The cell to fill.
                 * @param internalColumn The column definition.
                 * @param value The value the cell should display.
                 */
                protected __fillCell(elementCell: HTMLTableCellElement, internalColumn: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn, value: any): void;
                /**
                 * Resizes the specified column and remembers the result in __columnWidths
                 * @param columnIndex {number} The index of the column to resize. 0 is row numbers column.
                 * @param newWidth {number}    The new width of the column. Will be set to minWidth if it is smaller. This value already respects the widthUnit.
                 * @param override {boolean}   Set to true to resize a column that is marked as not resizable and process the size even when it has not changed. Useful for changes in widthUnit.
                 */
                protected __resizeColumn(columnIndex: number, newWidth: number, override?: boolean): void;
                /**
                * Is raised if the span in the first table is mousedown.
                * @param event - The event of mouseDown
                */
                protected __onColumnMouseDown: (event: MouseEvent) => void;
                /**
                * Is raised if the span in the first table is moved.
                * @param event - The event of mouseMOve
                */
                protected __onColumnMouseMove: (event: MouseEvent) => void;
                /**
                * Is raised if the span in the first table is mouseup.
                */
                protected __onColumnMouseUp: () => void;
                /**
               * Is raised if the span in the first table is double clicked.
               * @param event - The event of mouseDblClick.
               */
                protected __onColumnMouseDblClick: (event: MouseEvent) => void;
                /**
                * Is raised if the header element is keyup. Sort the data table.
                * @param event - The event of mouseUp
                */
                protected __onSortClick: (event: MouseEvent) => void;
                /**
                 * Handles touchstart events on table headers for sorting
                 */
                protected __onSortTouchStart: (event: TouchEvent) => void;
                /**
                 * Handles touchmove events on table headers for sorting
                 */
                protected __onSortTouchMove: (event: TouchEvent) => void;
                /**
                 * Handles touchend events on table headers for sorting
                 */
                protected __onSortTouchEnd: (event: TouchEvent) => void;
                /**
                 * Handles touchcancel event on table headers for sorting
                 */
                protected __onSortTouchCancel: (event: TouchEvent) => void;
                /**
                 * Modifies the sorting after a click or touch on a sort element.
                 * @param sortElement The sort element.
                 * @param composing Whether the sorting is modified by composing multiple sort criteria.
                 */
                protected __modifySorting(sortElement: HTMLElement, composing: boolean): void;
                /**
                 * Generate a map that specifies the indices of the data according to the sort criteria in __sorting
                 */
                protected __filterAndSort(): void;
                /**
                * Is raised if the data table is scrolled.
                * @param event - The event of scroll
                */
                protected __onScroll: (event: Event) => void;
                /**
                 * Updates the height of the divs above and below the data table to display correct scrollbars.
                 */
                protected __updateSentinels(): void;
                /**
                * Is raised if the TextBox or overlay div of TextBlock gets the focus.
                * @param elemCell - The event of focus
                */
                protected __onFocusElement: (event: Event) => void;
                /**
               * Is raised if the TextBox or overlay div of TextBlock loose the focus and set the new value to srcData.
               * @param elemCell - The event of focus out.
               */
                protected __onFocusElementOut: (event: Event) => void;
                protected __onEmptyAreaClick: (event: MouseEvent) => void;
                /**
                 * Event handler for the keydown event of textboxes.
                 * @param event The event object
                 */
                protected __onKeydown: (event: KeyboardEvent) => void;
                /**
                 * Event handler for the input event of textboxes.
                 * @param event The event object
                 */
                protected __onInput: (event: KeyboardEvent) => void;
                protected __onCheckboxMouseDown: (event: MouseEvent) => void;
                /**
                * Is raised if the CheckBox state is changed.
                * @param elemCell - The change event.
                */
                protected __onValueChange: (event: Event) => void;
                /**
                 * Modifies the srcData. Returns the new value of the modified row and column.
                 * @param valueNew The new value.
                 * @param row The row to modify.
                 * @param column The index of the column to modify.
                 */
                protected __modifySrcData(valueNew: any, row: number, column: number, rowElement: HTMLElement): {
                    convertedValue: any;
                    needSorting: boolean;
                } | null;
                /**
                 * Reads the property of an object that can be found by following the specified path.
                 * @param obj The object containing the property to read.
                 * @param path The path where the property can be found.
                 */
                protected __readObjectProperty(obj: object, path: string): any;
                /**
                 * Writes the property of an object that is specified by the given path.
                 * @param obj The object which will be written to.
                 * @param path The path where to write.
                 * @param valueNew The value to write.
                 */
                protected __writeObjectProperty(obj: object, path: string, valueNew: any): void;
                /**
                 * Reads the user preferences from localStorage and removes all entries whose stored value no longer match the output of their validation functions.
                 */
                protected __initStorage(): void;
                /**
                 * Returns the stored value associated with the given key for the current user.
                 * @param key The key to read.
                 */
                protected __getStoredValue<K extends keyof TcHmiDatagrid.Storage>(key: K): TcHmiDatagrid.Storage[K]['anonymousUser'];
                /**
                 * Sets a stored value for the current function.
                 * @param key The key of the value to set.
                 * @param value The value to set.
                 * @param validationFunction A function name to use for validation. When the object is read from localStorage and the output of this function does not match the last known result, the value is deemed invalid.
                 */
                protected __setStoredValue<K extends keyof TcHmiDatagrid.Storage, V extends Exclude<TcHmiDatagrid.Storage[K]['anonymousUser'], undefined>>(key: K, value: V): void;
                /**
                 * Removes a stored value for the current user.
                 * @param key The key of the value to remove.
                 */
                protected __removeStoredValue(key: keyof TcHmiDatagrid.Storage): void;
                /**
                * Sets the value of the member variable "srcColumn" if the new value is not equal to the current value
                * and calls the associated process function (processSrcColumn) after that.
                * @param valueNew The new value for srcColumn.
                */
                setSrcColumn(valueNew: TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn | null): void;
                /**
                * The watch callback for the srcColumn object resolver.
                */
                protected __onResolverForSrcColumnWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn>) => void;
                /**
               * Returns the current value of the member variable text.
               */
                getSrcColumn(): TcHmiDatagrid.SimpleColumn | TcHmiDatagrid.Column[] | undefined;
                /**
                * Processes the current value of srcColumn.
                * UpdateTable is called with srcColumn (Array.<DGColumnDefinition>) and null as parameter.
                */
                protected __processSrcColumn(): void;
                /**
                 * Executes the given format function.
                 * @param format   The format function to execute.
                 * @param value    The value to format.
                 */
                private __executeFormatFunction;
                /**
               * Sets the value of the member variable "srcData" if the new value is not equal to the current value
               * and calls the associated process function (processSrcData) after that.
               * @param valueNew The new value for srcData.
                */
                setSrcData(valueNew: any[] | null): void;
                private __setSrcData;
                /**
                 * The watch callback for the srcData object resolver
                 */
                protected __onResolverForSrcDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                /**
               * Returns the current value of the member variable srcData.
               */
                getSrcData(): any[] | undefined;
                /**
                * Processes the current value of srcData.
                * UpdateTable is called with null and srcData (Array.<Object>) as parameter.
                */
                protected __processSrcData(): void;
                /**
                 * @param valueNew
                 */
                setDataSymbol(valueNew: TcHmi.Symbol<any[]> | null): void;
                /**
                 */
                getDataSymbol(): Symbol<any[]> | null | undefined;
                /**
                 * Processes the dataSymbol.
                 * @param unsubscribeOnly Should be set to true when this method is called from __detach. Prevents a new subscription being created after the existing subscription was unsubscribed.
                 */
                protected __processDataSymbol(unsubscribeOnly?: boolean): void;
                /**
                 * Updates the data symbol paging parameters.
                 */
                protected __updatePaging(force?: boolean): void;
                /**
                 * Callback function for dataSymbol paging.
                 */
                protected __onDataSymbolPage: (data: Server.IResultObject<unknown, any[]>) => void;
                /**
                 * Callback function for dataSymbol watch.
                 */
                protected __onDataSymbolWatch: (data: TcHmi.Symbol.IReadResultObject<any[]>) => void;
                __setDataSymbolTransform(valueNew: ((rowData: any) => any) | null): void;
                /**
                 * Sets the value of the member variable "sorting" if the new value is not equal to the current value
                 * and calls the associated process function (processSorting) after that.
                 * @param valueNew The new value for sorting.
                 */
                setSorting(valueNew: TcHmiDatagrid.SortingInfo[] | null): void;
                /**
                 * The watch callback for the sorting object resolver
                 */
                protected __onResolverForSortingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiDatagrid.SortingInfo[]>) => void;
                /**
                 * Returns the current value of the member variable sorting.
                 */
                getSorting(): TcHmiDatagrid.SortingInfo[] | undefined;
                /**
                 * Processes the current value of sorting.
                 */
                protected __processSorting(): void;
                /**
                 * Sets the value of the member variable "filter" if the new value is not equal to the current value
                 * and calls the associated process function (processFilter) after that.
                 * @param valueNew The new value for filter.
                 */
                setFilter(valueNew: Filter | null): void;
                /**
                 * The watch callback for the filter object resolver
                 */
                protected __onResolverForFilterWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Filter>) => void;
                /**
                 * Returns the current value of the member variable filter.
                 */
                getFilter(): Filter | null | undefined;
                /**
                 * Processes the current value of filter.
                 */
                protected __processFilter(): void;
                /**
                 * Sets the value of the rowClassesProvider order attribute.
                 * @param value The new rowClassesProvider method.
                 */
                setRowClassesProvider(valueNew: TcHmi.IFunction | null): void;
                /**
                 * Gets the current rowClassesProvider method.
                 * @returns the current rowClassesProvider method.
                 */
                getRowClassesProvider(): IFunction | undefined;
                /**
                 * Processes the current rowClassesProvider method
                 */
                protected __processRowClassesProvider(): void;
                /**
                 * Executes the current rowClassesProvider function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeRowClassesProviderFunction;
                /**
                 * Set the required classes on the specified row element
                 * @param row The element to set classes on
                 * @param dataIndex The index of the row data in srcData
                 */
                protected __setRowClasses(row: HTMLElement, dataIndex: number): void;
                /**
               * Sets the value of the member variable "headerHeight" if the new value is not equal to the current value
               * and calls the associated process function (processHeaderHeight) after that.
               * @param valueNew The new value for headerHeight.
                */
                setHeaderHeight(valueNew: number | null): void;
                /**
               * Returns the current value of the member variable headerHeight.
               */
                getHeaderHeight(): number | undefined;
                /**
                * Processes the current value of headerHeight.
                * UpdateTable is called with srcColumn (string) and null as parameter.
                */
                protected __processHeaderHeight(): void;
                /**
               * Sets the value of the member variable "headerHeightUnit" if the new value is not equal to the current value
               * and calls the associated process function (processHeaderHeightUnit) after that.
               * @param valueNew The new value for headerHeightUnit.
                */
                setHeaderHeightUnit(valueNew: DimensionUnit | null): void;
                /**
               * Returns the current value of the member variable headerHeightUnit.
               */
                getHeaderHeightUnit(): "px" | "%" | undefined;
                /**
                * Processes the current value of headerHeightUnit.
                * UpdateTable is called with srcColumn (string) and null as parameter.
                */
                protected __processHeaderHeightUnit(): void;
                /**
                * Sets the value of the member variable "headerCellPadding" if the new value is not equal to the current value
                * and calls the associated process function (processHeaderCellPadding) after that.
                * @param valueNew The new value for headerCellPadding.
                */
                setHeaderCellPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the headerCellPadding object resolver
                 */
                protected __onResolverForHeaderCellPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
               * Returns the current value of the member variable headerCellPadding.
               */
                getHeaderCellPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current value of headerCellPadding.
                * UpdateTable is called with null and srcData (string) as parameter.
                */
                protected __processHeaderCellPadding(): void;
                /**
               * Sets the value of the member variable "rowHeight" if the new value is not equal to the current value
               * and calls the associated process function (processrowHeight) after that.
               * @param valueNew The new value for rowHeight.
                */
                setRowHeight(valueNew: number | null): void;
                /**
               * Returns the current value of the member variable rowHeight.
               */
                getRowHeight(): number | undefined;
                /**
                * Processes the current value of rowHeight.
                * UpdateTable is called with null and srcData (string) as parameter.
                */
                protected __processRowHeight(): void;
                /**
               * Returns the current value of the member variable rowHeightUnit.
               */
                getRowHeightUnit(): string;
                /**
                * Sets the table-border-color attribute value and calls the associated process function (processBorderColor).
                * @param valueNew The new attribute value.
                */
                setTableBorderColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tableBorderColor object resolver
                 */
                protected __onResolverForTableBorderColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current table-border-color value.
                * @returns The current attribute value.
                */
                getTableBorderColor(): SolidColor | null | undefined;
                /**
                * Processes the current table-border-color attribute.
                */
                protected __processTableBorderColor(): void;
                /**
                * Sets the Grid-width attribute value and calls the associated process function (processBorderWidth).
                * @param valueNew The new attribute value.
                */
                setTableBorderWidth(valueNew: number | null): void;
                /**
                * Returns the current table-border-width value.
                * @returns The current attribute value.
                */
                getTableBorderWidth(): number | undefined;
                /**
                * Processes the current border-width attribute.
                */
                protected __processTableBorderWidth(): void;
                /**
                 * DEPRECATED! BorderWidthUnit is always 'px'. This function exists purely to avoid errors in existing projects.
                 * @deprecated BorderWidthUnit is always 'px'.
                 */
                setTableBorderWidthUnit(): void;
                /**
                * Returns the current table-border-width-unit value.
                * @returns The current attribute value.
                */
                getTableBorderWidthUnit(): string;
                /**
                * Internal reference to the attribute "data-tchmi-table-border-type".
                */
                setTableBorderStyle(valueNew: TcHmi.BorderStyle | null): void;
                /**
                 * The watch callback for the tableBorderStyle object resolver
                 */
                protected __onResolverForTableBorderStyleWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BorderStyle>) => void;
                /**
                * Returns the current table-border-style value.
                * @returns The current attribute value.
                */
                getTableBorderStyle(): BorderStyle | null | undefined;
                /**
                * Processes the current border-style attribute.
                */
                protected __processTableBorderStyle(): void;
                /**
                 * Sets the value of showRowNumbers
                 * @param valueNew The new value for showRowNumbers
                 */
                setShowRowNumbers(valueNew: boolean | null): void;
                /**
                 * Gets the value of showRowNumbers
                 * @returns The current value of showRowNumbers
                 */
                getShowRowNumbers(): boolean | undefined;
                /**
                 * Processes showRowNumbers
                 */
                protected __processShowRowNumbers(): void;
                /**
                 * Sets the value of rowNumbersResizable
                 * @param valueNew The new value for rowNumbersResizable
                 */
                setRowNumbersResizable(valueNew: boolean | null): void;
                /**
                 * Gets the value of rowNumbersResizable
                 * @returns The current value of rowNumbersResizable
                 */
                getRowNumbersResizable(): boolean | undefined;
                /**
                 * Processes rowNumbersResizable
                 */
                protected __processRowNumbersResizable(): void;
                /**
                 * Sets the value of rowNumbersWidth
                 * @param valueNew The new value for rowNumbersWidth
                 */
                setRowNumbersWidth(valueNew: number | null): void;
                /**
                 * Gets the value of rowNumbersWidth
                 * @returns The current value of rowNumbersWidth
                 */
                getRowNumbersWidth(): number | undefined;
                /**
                 * Processes rowNumbersWidth
                 */
                protected __processRowNumbersWidth(): void;
                /**
                 * Sets the value of rowNumbersWidthUnit
                 * @param valueNew The new value for rowNumbersWidthUnit
                 */
                setRowNumbersWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Gets the value of rowNumbersWidthUnit
                 * @returns The current value of rowNumbersWidthUnit
                 */
                getRowNumbersWidthUnit(): "px" | "%" | undefined;
                /**
                 * Processes rowNumbersWidthUnit
                 */
                protected __processRowNumbersWidthUnit(): void;
                /**
                 * Sets the value of rowNumbersHorizontalAlignment
                 * @param valueNew The new value for rowNumbersHorizontalAlignment
                 */
                setRowNumbersHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                 * Gets the value of rowNumbersHorizontalAlignment
                 * @returns The current value of rowNumbersHorizontalAlignment
                 */
                getRowNumbersHorizontalAlignment(): "Left" | "Center" | "Right" | undefined;
                /**
                 * Processes rowNumbersHorizontalAlignment
                 */
                protected __processRowNumbersHorizontalAlignment(): void;
                /**
                 * Sets the value of rowNumbersVerticalAlignment
                 * @param valueNew The new value for rowNumbersVerticalAlignment
                 */
                setRowNumbersVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                 * Gets the value of rowNumbersVerticalAlignment
                 * @returns The current value of rowNumbersVerticalAlignment
                 */
                getRowNumbersVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                 * Processes rowNumbersVerticalAlignment
                 */
                protected __processRowNumbersVerticalAlignment(): void;
                /**
                * Sets the value of the member variable "rowNumbersCellPadding" if the new value is not equal to the current value
                * and calls the associated process function (processRowNumbersCellPadding) after that.
                * @param valueNew The new value for rowNumbersCellPadding.
                */
                setRowNumbersCellPadding(valueNew: TcHmi.FourSidedCss | null): void;
                /**
                 * The watch callback for the rowNumbersCellPadding object resolver
                 */
                protected __onResolverForRowNumbersCellPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
               * Returns the current value of the member variable rowNumbersCellPadding.
               */
                getRowNumbersCellPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current value of rowNumbersCellPadding.
                * UpdateTable is called with null and srcData (string) as parameter.
                */
                protected __processRowNumbersCellPadding(): void;
                /**
                * Sets the value of the member variable "cellContentPadding" if the new value is not equal to the current value
                * and calls the associated process function (processCellContentPadding) after that.
                * @param valueNew The new value for cellContentPadding.
                */
                setCellContentPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the cellContentPadding object resolver
                 */
                protected __onResolverForCellContentPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
               * Returns the current value of the member variable cellContentPadding.
               */
                getCellContentPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current value of cellContentPadding.
                * UpdateTable is called with null and srcData (string) as parameter.
                */
                protected __processCellContentPadding(): void;
                /**
                * Sets the background value and calls the associated process function ("processHeaderBackground").
                * @param valueNew The new value for the header background attribute as json string.
                * ...
                */
                setHeaderBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the headerBackgroundColor object resolver
                 */
                protected __onResolverForHeaderBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current header background value.
                * @returns -  The current value of the header background member variable as json in string format.
                */
                getHeaderBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current header background attribute.
                */
                protected __processHeaderBackgroundColor(): void;
                /**
                * Sets the text color and calls the associated process function (processHeaderTextColor).
                * @param valueNew The new value for textFColor.
                */
                setHeaderTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the headerTextColor object resolver
                 */
                protected __onResolverForHeaderTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of headertextColor.
                * @returns The current value of headertextColor.
                */
                getHeaderTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current headertextColor attribute value.
                */
                protected __processHeaderTextColor(): void;
                /**
                * Sets the text color and calls the associated process function (processRowNumbersTextColor).
                * @param valueNew The new value for textFColor.
                */
                setRowNumbersTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the rowNumbersTextColor object resolver
                 */
                protected __onResolverForRowNumbersTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of rowNumberstextColor.
                * @returns The current value of rowNumberstextColor.
                */
                getRowNumbersTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current rowNumberstextColor attribute value.
                */
                protected __processRowNumbersTextColor(): void;
                /**
                * Sets the row numbers background value and calls the associated process function ("processRowNumbersBackground").
                * @param valueNew The new value for the row numbers background attribute.
                */
                setRowNumbersBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the rowNumbersBackgroundColor object resolver
                 */
                protected __onResolverForRowNumbersBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current row numbers background value.
                * @returns -  The current value of the row numbers background member variable.
                */
                getRowNumbersBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current row numbers background attribute.
                */
                protected __processRowNumbersBackgroundColor(): void;
                /**
                 * Sets the header font family and calls the associated process function.
                 * @param valueNew The new value for headerFontFamily
                 */
                setHeaderFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current value of headerFontFamily.
                 * @returns The current value of headerFontFamily.
                 */
                getHeaderFontFamily(): string | null | undefined;
                /**
                 * Processes the current headerFontFamily.
                 */
                protected __processHeaderFontFamily(): void;
                /**
                 * Sets the header font size and calls the associated process function.
                 * @param valueNew The new value for headerFontSize
                 */
                setHeaderFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of headerFontSize.
                 * @returns The current value of headerFontSize.
                 */
                getHeaderFontSize(): number | undefined;
                /**
                 * Processes the current headerFontSize.
                 */
                protected __processHeaderFontSize(): void;
                /**
                 * Sets the header font size unit and calls the associated process function.
                 * @param valueNew The new value for headerFontSizeUnit
                 */
                setHeaderFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of headerFontSizeUnit.
                 * @returns The current value of headerFontSizeUnit.
                 */
                getHeaderFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current headerFontSizeUnit.
                 */
                protected __processHeaderFontSizeUnit(): void;
                /**
                 * Sets the header font style and calls the associated process function.
                 * @param valueNew The new value for headerFontStyle
                 */
                setHeaderFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of headerFontStyle.
                 * @returns The current value of headerFontStyle.
                 */
                getHeaderFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current headerFontStyle.
                 */
                protected __processHeaderFontStyle(): void;
                /**
                 * Sets the header font family and calls the associated process function.
                 * @param valueNew The new value for headerFontWeight
                 */
                setHeaderFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of headerFontWeight.
                 * @returns The current value of headerFontWeight.
                 */
                getHeaderFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current headerFontWeight.
                 */
                protected __processHeaderFontWeight(): void;
                /**
                 * Sets the grid font family and calls the associated process function.
                 * @param valueNew The new value for gridFontFamily
                 */
                setGridFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current value of gridFontFamily.
                 * @returns The current value of gridFontFamily.
                 */
                getGridFontFamily(): string | null | undefined;
                /**
                 * Processes the current gridFontFamily.
                 */
                protected __processGridFontFamily(): void;
                /**
                 * Sets the grid font size and calls the associated process function.
                 * @param valueNew The new value for gridFontSize
                 */
                setGridFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of gridFontSize.
                 * @returns The current value of gridFontSize.
                 */
                getGridFontSize(): number | undefined;
                /**
                 * Processes the current gridFontSize.
                 */
                protected __processGridFontSize(): void;
                /**
                 * Sets the grid font size unit and calls the associated process function.
                 * @param valueNew The new value for gridFontSizeUnit
                 */
                setGridFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of gridFontSizeUnit.
                 * @returns The current value of gridFontSizeUnit.
                 */
                getGridFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current gridFontSizeUnit.
                 */
                protected __processGridFontSizeUnit(): void;
                /**
                 * Sets the grid font style and calls the associated process function.
                 * @param valueNew The new value for gridFontStyle
                 */
                setGridFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of gridFontStyle.
                 * @returns The current value of gridFontStyle.
                 */
                getGridFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current gridFontStyle.
                 */
                protected __processGridFontStyle(): void;
                /**
                 * Sets the grid font family and calls the associated process function.
                 * @param valueNew The new value for gridFontWeight
                 */
                setGridFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of gridFontWeight.
                 * @returns The current value of gridFontWeight.
                 */
                getGridFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current gridFontWeight.
                 */
                protected __processGridFontWeight(): void;
                /**
                 * Sets the row numbers font family and calls the associated process function.
                 * @param valueNew The new value for rowNumbersFontFamily
                 */
                setRowNumbersFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current value of rowNumbersFontFamily.
                 * @returns The current value of rowNumbersFontFamily.
                 */
                getRowNumbersFontFamily(): string | null | undefined;
                /**
                 * Processes the current rowNumbersFontFamily.
                 */
                protected __processRowNumbersFontFamily(): void;
                /**
                 * Sets the row numbers font size and calls the associated process function.
                 * @param valueNew The new value for rowNumbersFontSize
                 */
                setRowNumbersFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of rowNumbersFontSize.
                 * @returns The current value of rowNumbersFontSize.
                 */
                getRowNumbersFontSize(): number | undefined;
                /**
                 * Processes the current rowNumbersFontSize.
                 */
                protected __processRowNumbersFontSize(): void;
                /**
                 * Sets the row numbers font size unit and calls the associated process function.
                 * @param valueNew The new value for rowNumbersFontSizeUnit
                 */
                setRowNumbersFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of rowNumbersFontSizeUnit.
                 * @returns The current value of rowNumbersFontSizeUnit.
                 */
                getRowNumbersFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current rowNumbersFontSizeUnit.
                 */
                protected __processRowNumbersFontSizeUnit(): void;
                /**
                 * Sets the row numbers font style and calls the associated process function.
                 * @param valueNew The new value for rowNumbersFontStyle
                 */
                setRowNumbersFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of rowNumbersFontStyle.
                 * @returns The current value of rowNumbersFontStyle.
                 */
                getRowNumbersFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current rowNumbersFontStyle.
                 */
                protected __processRowNumbersFontStyle(): void;
                /**
                 * Sets the row numbers font family and calls the associated process function.
                 * @param valueNew The new value for rowNumbersFontWeight
                 */
                setRowNumbersFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of rowNumbersFontWeight.
                 * @returns The current value of rowNumbersFontWeight.
                 */
                getRowNumbersFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current rowNumbersFontWeight.
                 */
                protected __processRowNumbersFontWeight(): void;
                /**
                 * Sets the selected row by index.
                 * @param valueNew The new value for selectedRowIndex
                 */
                setSelectedRowIndex(valueNew: number | null): void;
                /**
                 * Returns the current value of selectedRowIndex.
                 * @returns The current value of selectedRowIndex.
                 */
                getSelectedRowIndex(): number | null;
                /**
                 * Processes the current selectedRowIndex.
                 */
                protected __processSelectedRowIndex(): void;
                /**
                 * Sets the selected column by index.
                 * @param valueNew The new value for selectedColumnIndex
                 */
                setSelectedColumnIndex(valueNew: number | null): void;
                /**
                 * Returns the current value of selectedColumnIndex.
                 * @returns The current value of selectedColumnIndex.
                 */
                getSelectedColumnIndex(): number | null;
                /**
                 * Processes the current selectedColumnIndex.
                 */
                protected __processSelectedColumnIndex(): void;
                /**
                 * Returns the current value of srcDataHasChanged.
                 * @returns The current value of srcDataHasChanged.
                 */
                getSrcDataHasChanged(): boolean;
                /**
                 * Returns the current value of selectedCellValue.
                 * @returns The current value of selectedCellValue.
                 */
                getSelectedCellValue(): any;
                /**
                 * Returns the current value of selectedRowValue.
                 * @returns The current value of selectedRowValue.
                 */
                getSelectedRowValue(): any;
                /**
                 * Sets the value of the width mode attribute.
                 * @param valueNew The new width mode value.
                 */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                 * Calculates the width of all columns inside the control.
                 */
                __getContentWidth(): number | null;
                /**
                 * Processes the width attribute
                 */
                __processWidth(): void;
                /**
                 * Sets the value of the height mode attribute.
                 * @param valueNew The new height mode value.
                 */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                 * Calculates the height of all columns inside the control.
                 */
                __getContentHeight(): number | null;
                /**
                 * Processes the height attribute
                 */
                __processHeight(): void;
                /** Lock handling */
                /**
                * Lock the control. Calls to setText will be ignored until control is unlocked.
                */
                protected __lock(row: number, column: number, rowElement: HTMLTableRowElement): void;
                /**
                * Unlocks the control.
                */
                protected __unlock(): void;
                /**
                 * If server paging is used, translates the index of an item in __srcData to the original index before serverside filtering, sorting and paging.
                 * Returns -1 if the index is not included in the filterMap sent from the server.
                 * @param index The index to translate, referring to an item in the __srcData array.
                 */
                protected __srcDataIndexToOriginalIndex(index: number): number;
                /**
                 * If server paging is used, translates an index referring to an item in the original data before serverside filtering, sorting and paging to the index of the item in __srcData.
                 * Returns -1 if the index is not included in the filterMap sent from the server.
                 * @param index The index to translate, referring to an item in the original data.
                 */
                protected __originalIndexToSrcDataIndex(index: number): number;
                /**
                 * Processes the current enabled state.
                 */
                __processIsEnabled(): void;
            }
            module TcHmiDatagrid {
                interface Column extends SimpleColumn {
                    /** Name of the property of the srcData object */
                    name: string;
                }
                interface SimpleColumn {
                    /** Color of this cells */
                    cellBackground?: TcHmi.SolidColor | null;
                    /** Color of the Text in this cells */
                    textColor?: TcHmi.SolidColor | null;
                    /** Name of the Label for this column */
                    label: string;
                    /** Type of the input elements for this column */
                    control: 'TextBlock' | 'TextBox' | 'CheckBox' | 'ComboBox' | 'Image';
                    /** Width for this column */
                    width: number;
                    /** Width unit for this column */
                    widthUnit: DimensionUnit;
                    /** Can this column be resized? */
                    resize?: boolean;
                    /** Minimum width for this column */
                    minWidth?: number;
                    /** Minimum width unit for this column */
                    minWidthUnit?: DimensionUnit;
                    /** Can this column be edited? */
                    editable?: boolean;
                    /** Can this column be sorted by user interaction? */
                    sortable?: boolean;
                    /** Horizontal alignment of this column */
                    horizontalAlignment?: TcHmi.HorizontalAlignment;
                    /** Vertical alignment of this column */
                    verticalAlignment?: TcHmi.VerticalAlignment;
                    /** A reference of function which is called with each entry */
                    format?: TcHmi.IFunction;
                    /** Mapping from the srcData to a Combobox or Image selection */
                    dataDefinitions?: DataDefinition[];
                    /**Horizontal alignment of this header */
                    headerHorizontalAlignment?: TcHmi.HorizontalAlignment;
                    /**Vertical alignment of this header */
                    headerVerticalAlignment?: TcHmi.VerticalAlignment;
                }
                interface DataDefinition {
                    value: any;
                    source?: string;
                    text: string;
                    width?: number;
                    height?: number;
                }
                function isSimpleColumn(obj: Column | SimpleColumn): obj is SimpleColumn;
                interface SortingInfo {
                    name?: string;
                    order: 'Ascending' | 'Descending';
                }
                interface SortTouchInfo {
                    touchId: number;
                    timeoutId: number | null;
                    sortElement: HTMLElement;
                    clientX: number;
                    clientY: number;
                }
                const enum __updateTableType {
                    dataChange = 0,
                    configChange = 1,
                    scroll = 2
                }
                interface Storage {
                    sorting: StorageItem<SortingInfo[], SortingInfo[]>;
                    columnWidths: StorageItem<number[], Column[] | SimpleColumn>;
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

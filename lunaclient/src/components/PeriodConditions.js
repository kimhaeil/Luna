import React, { useState } from "react";
import { DateRange } from 'react-date-range';

export default function PeriodConditions() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    return (
        <React.Fragment>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                range={state}
            />
        </React.Fragment>
    );
}

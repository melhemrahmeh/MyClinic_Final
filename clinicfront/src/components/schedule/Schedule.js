import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import React  from 'react'

export default function Schedule() {
    return (

        <div>            
            < div style={{
                "width": "100%", "height": "90%", "float": "right", "color": "blue"
            }}>
                <ScheduleComponent currentView='Month'>
                    <ViewsDirective>
                        <ViewDirective option='Day'></ViewDirective>
                        <ViewDirective option='Week'></ViewDirective>
                        <ViewDirective option='Month'></ViewDirective>
                    </ViewsDirective>
                    <Inject services={[Day, Week, Month]} />
                </ScheduleComponent>
            </div >
        </div>
    );
}
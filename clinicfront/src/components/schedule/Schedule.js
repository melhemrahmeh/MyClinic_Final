import { Inject, ScheduleComponent, Day, Week, Month , ViewsDirective , ViewDirective } from '@syncfusion/ej2-react-schedule';

export default function Schedule() {
    return (
        <ScheduleComponent currentView='Month'>
            <ViewsDirective>
                <ViewDirective option='Day'></ViewDirective>
                <ViewDirective option='Week'></ViewDirective>
                <ViewDirective option='Month'></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day , Week , Month ]}/>
        </ScheduleComponent>
    );
}  
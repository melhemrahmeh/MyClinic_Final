import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Schedule() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/appointments/")
            .then((res) => {
                setData(res.data);
                console.log("Result:", data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const parsedData = [
    ];



    for (let i = 0; i < data.length; i++) {
        parsedData.push({
            Id: data[i]._id,
            Subject: data[i].firstName + data[i].lastName + data[i].operation,
            StartTime: new Date(data[i].date.substring(0, 4), data[i].date.substring(6, 8), data[i].date.substring(10, 12), data[i].time.substring(0, 2), data[i].time.substring(3, 5)),
            EndTime: new Date()
        });
    }

    return (
        <ScheduleComponent currentView='Month' selectedDate={new Date(2022, 4, 9)} eventSettings={{ dataSource: parsedData }}>
            <ViewsDirective>
                <ViewDirective option='Day'></ViewDirective>
                <ViewDirective option='Week'></ViewDirective>
                <ViewDirective option='Month'></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    );
}
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
        let t = data[i].time
        let minutes = (parseInt(t.substring(3, 5)) + 29);
        let endtime = t.substring(0, 3) + minutes + t.substring(5, t.length)
        parsedData.push({
            Subject: data[i].firstName + data[i].lastName + data[i].operation,
            StartTime: new Date(data[i].date+"T"+data[i].time+"+03:00"),
            EndTime: new Date(data[i].date + "T" + endtime + "+03:00")
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
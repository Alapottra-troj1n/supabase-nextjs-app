
import dayjs from 'dayjs';
export default function Calender() {

    const getDateInMonths = (year = dayjs().year(), month = dayjs().month()) => {

        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf('month');

        let datesArray = []
        for(let i = startDate.date(); i <= endDate.date(); i++ ){
                datesArray.push(startDate.date(i).format('YYYY,MM,DD'));
        }
        return datesArray;
    }

   console.log(getDateInMonths())

    return (
        <div>Calender</div>
    )
}

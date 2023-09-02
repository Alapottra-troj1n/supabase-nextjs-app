import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import dayjs from 'dayjs';

export default function Calender() {

    const getDateInMonths = (year = dayjs().year(), month = dayjs().month()) => {

        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf('month');

        let datesArray = []
        for (let i = startDate.date(); i <= endDate.date(); i++) {
            datesArray.push(startDate.date(i).format('YYYY-MM-DD'));
        }
        return datesArray;
    }



    return (
        <div>

            <div className='flex flex-wrap gap-2 border border-dashed p-10 justify-center rounded-md '>
                {getDateInMonths().map((date, index) => {
                    return (
                        <HoverCard key={index}>
                            <HoverCardTrigger>
                            <div className='w-5 h-5 bg-gray-200 rounded-sm cursor-pointer' key={index}>
                            </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                               0 hours on {date}
                            </HoverCardContent>
                        </HoverCard>

                    )
                })}
            </div>
        </div>
    )
}

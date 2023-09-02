import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils";
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

    const getColor = (hour: number) => {
        if (hour === 0) {
            return 'bg-gray-200'
        } else if (hour < 5) {
            return 'bg-green-200'
        } else if (hour < 10) {
            return 'bg-green-400'
        } else {
            return 'bg-green-500'
        }
    }
    const hour = 5;
    return (
        <div>

            <div className='flex flex-wrap gap-2 border border-dashed p-10 justify-center rounded-md '>
                {getDateInMonths().map((date, index) => {
                    return (
                        <HoverCard key={index}>
                            <HoverCardTrigger>
                                <div  className={cn('w-5 h-5  rounded-sm cursor-pointer',getColor(hour || 0) )} key={index}>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                {hour || 0} hours on {date}
                            </HoverCardContent>
                        </HoverCard>
                    )
                })}
            </div>
        </div>
    )
}

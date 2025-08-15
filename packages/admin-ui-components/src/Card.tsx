import { ReactNode, useMemo } from "react";
import PositiveChart from "./charts/PositiveChart";
import NegativeChart from "./charts/NegativeChart";
import DefaultChart from "./charts/DefaultChart";

type Props = {
    label: string,
    value: string,
    chartValue: number
}

export default function Card({ label, value, chartValue }: Props) {

    type ChartProps = {
        color: string,
        value: string,
        chart?: ReactNode
    }

    const chartProps = useMemo((): ChartProps => {
        if (chartValue < 0) {
            const chart: ChartProps = {
                value: chartValue + "%",
                color: "text-[#FF392B]",
                chart: <NegativeChart />
            }
            return chart;
        } else if (chartValue > 1) {
            const chart: ChartProps = {
                value: "+" + chartValue + "%",
                color: "text-[#279F51]",
                chart: <PositiveChart />
            }
            return chart;
        }
        const chart: ChartProps = {
            value: chartValue + "%",
            color: "text-[#FFA000]",
            chart: <DefaultChart />
        }
        return chart;
    }, [chartValue]);

    return (
        <div className="bg-white w-[280px] h-[112px] border border-stroke rounded-lg">
            <div className="flex py-[24px] px-[28px] size-full ">
                <div className="flex flex-col basis-1/2 justify-between">
                    <h4>{label}</h4>
                    <h2>{value}</h2>
                </div>

                <div className={`flex flex-col basis-1/2 justify-between items-end ${chartProps.color}`}>
                    <h3>{chartProps.value}</h3>
                    {chartProps.chart}
                </div>
            </div>
        </div>
    )
}

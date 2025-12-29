import { ReactNode, useMemo } from "react";

import PositiveChart from "../charts/PositiveChart";
import NegativeChart from "../charts/NegativeChart";
import DefaultChart from "../charts/DefaultChart";
import Card from "./Card";

type Props = {
  label: string;
  value: string;
  trendValue: number; // in percents
};

export default function CardWithChard({ label, value, trendValue }: Props) {
  enum Trend {
    Positive,
    Negative,
    Neutral,
  }

  const trend = useMemo<Trend>(() => {
    if (trendValue > 0) {
      return Trend.Positive;
    } else if (trendValue < 0) {
      return Trend.Negative;
    }
    return Trend.Neutral;
  }, [trendValue]);

  const trendColor = useMemo<string>(() => {
    switch (trend) {
      case Trend.Positive:
        return "text-essential-green";
      case Trend.Negative:
        return "text-essential-red";
      case Trend.Neutral:
        return "text-essential-orange";
    }
  }, [trend]);

  const chart = useMemo<ReactNode>(() => {
    switch (trend) {
      case Trend.Positive:
        return <PositiveChart />;
      case Trend.Negative:
        return <NegativeChart />;
      case Trend.Neutral:
        return <DefaultChart />;
    }
  }, [trend]);

  const valueLabel = useMemo<string>(() => {
    switch (trend) {
      case Trend.Positive:
        return "+" + trendValue + "%";
      case Trend.Negative:
      case Trend.Neutral:
        return trendValue + "%";
    }
  }, [trend, trendValue]);

  return (
    <Card label={label} value={value}>
      <div
        className={`flex flex-col basis-1/2 justify-between items-end ${trendColor}`}
      >
        <h3>{valueLabel}</h3>
        {chart}
      </div>
    </Card>
  );
}

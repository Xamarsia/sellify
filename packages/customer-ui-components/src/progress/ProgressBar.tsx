"use client";

import { Fragment } from "react";

import ProgressBarItem from "./ProgressBarItem";

import { ProgressStepInfo } from "../types";

type ProgressBarProps = {
  steps: Array<ProgressStepInfo>;
  currentStep: number;
  onStepClick: (step: number) => void;
};

export default function ProgressBar({
  steps,
  currentStep,
  onStepClick,
}: ProgressBarProps) {
  return (
    <nav className="w-full flex justify-between items-top h-16 ">
      {steps.map(({ step, title, icon }, index) => {
        const isSelected = currentStep >= step;
        return (
          <Fragment key={`ProgressBarItem-${step}`}>
            {index > 0 && (
              <div
                className={`grow h-5 border-b border-dashed ${isSelected ? "border-black" : "border-stroke"}`}
              />
            )}
            <ProgressBarItem
              label={title}
              step={step}
              icon={icon}
              isSelected={isSelected}
              position={
                index === 0
                  ? "first"
                  : index === steps.length - 1
                    ? "last"
                    : "center"
              }
              onStepClick={onStepClick}
            />
          </Fragment>
        );
      })}
    </nav>
  );
}

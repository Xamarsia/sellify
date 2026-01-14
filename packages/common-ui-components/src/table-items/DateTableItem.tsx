"use client";

type DateTableItemProps = {
  date: string;
};

export default function DateTableItem({ date }: DateTableItemProps) {
  return <p>{date}</p>;
}

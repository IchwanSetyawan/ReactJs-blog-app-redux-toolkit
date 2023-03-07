import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";


const TimeAgo = ({timestamp}) => {
    const date = parseISO(timestamp)
    const timeAgo = formatDistanceToNow(date)

  return <p className="text-sm text-gray-500  ">{timeAgo} ago</p>;
};

export default TimeAgo;

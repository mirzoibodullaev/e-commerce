import React, { useState, useEffect, useCallback } from "react";
import "./DateTime.scss";

interface CountdownTimerProps {
    targetDate: Date;
}

export const DateTime: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft, targetDate]);

    const formatWithLeadingZero = (value: number) =>
        value.toString().padStart(2, "0");

    return (
        <div className="countdown-timer">
            <div className="countdown-timer__segment">
                <span className="countdown-timer__label">Days</span>
                <div className="countdown-timer__value">
                    {formatWithLeadingZero(timeLeft.days)}
                    <span className="countdown-timer__colon">:</span>
                </div>
            </div>
            <div className="countdown-timer__segment">
                <span className="countdown-timer__label">Hours</span>
                <div className="countdown-timer__value">
                    {formatWithLeadingZero(timeLeft.hours)}
                    <span className="countdown-timer__colon">:</span>
                </div>
            </div>
            <div className="countdown-timer__segment">
                <span className="countdown-timer__label">Minutes</span>
                <div className="countdown-timer__value">
                    {formatWithLeadingZero(timeLeft.minutes)}
                    <span className="countdown-timer__colon">:</span>
                </div>
            </div>
            <div className="countdown-timer__segment">
                <span className="countdown-timer__label">Seconds</span>
                <div className="countdown-timer__value">
                    {formatWithLeadingZero(timeLeft.seconds)}
                </div>
            </div>
        </div>
    );
};

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ellipsis, Hourglass, Pause, Play, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function CountdownTimer() {
  const [minutes, setMinutes] = useState(10); // Thời gian mặc định: 10 phút
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(minutes * 60 + seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          toast.error("Out of time", {
            icon: <Hourglass size={15} />,
            description: "The countdown has ended.",
          });
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    setTimeLeft(minutes * 60 + seconds);
    setIsRunning(false);
  }, [minutes, seconds]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Hiển thị thời gian đếm ngược */}
      <p className="text-4xl font-bold">
        {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
        {String(timeLeft % 60).padStart(2, "0")}
      </p>

      {/* Nút điều khiển */}
      <div className="mt-4 flex justify-center gap-2">
        <Button
          disabled={timeLeft === 0 ? true : false}
          onClick={() => setIsRunning(!isRunning)}
          size="icon"
        >
          {isRunning ? <Pause /> : <Play />}
        </Button>
        <Button
          onClick={() => {
            setTimeLeft(minutes * 60 + seconds);
            setIsRunning(false);
          }}
          variant="outline"
          size="icon"
        >
          <RotateCcw />
        </Button>
        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <Button variant="secondary" size="icon">
              <Ellipsis />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-4 items-center p-4 w-full border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex flex-row items-center justify-center gap-2">
              <Button
                onClick={() => {
                  setIsRunning(false);
                  setSeconds(0);
                  setMinutes(5);
                  setTimeLeft(5 * 60);
                }}
                variant="outline"
              >
                5"
              </Button>
              <Button
                onClick={() => {
                  setIsRunning(false);
                  setSeconds(0);
                  setMinutes(25);
                  setTimeLeft(25 * 60);
                }}
                variant="outline"
              >
                25"
              </Button>
              <Button
                onClick={() => {
                  setIsRunning(false);
                  setSeconds(0);
                  setMinutes(60);
                  setTimeLeft(60 * 60);
                }}
                variant="outline"
              >
                60"
              </Button>
            </div>

            {/* Input chỉnh thời gian */}
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setMinutes(minutes === 99 ? minutes : minutes + 1)
                  }
                >
                  ▲
                </Button>
                <Input
                  type="number"
                  min="0"
                  max="99"
                  value={minutes.toString()}
                  onChange={(e) => {
                    if (parseInt(e.target.value, 10) >= 99) {
                      return;
                    }
                    const value = e.target.value.replace(/^0+/, "") || "0";
                    setMinutes(parseInt(value, 10));
                  }}
                  className="custom-number-input w-16 text-center text-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setMinutes(minutes === 0 ? minutes : minutes - 1)
                  }
                >
                  ▼
                </Button>
              </div>
              <span className="text-xl font-semibold">"</span>
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setSeconds(seconds === 59 ? seconds : seconds + 1)
                  }
                >
                  ▲
                </Button>
                <Input
                  type="number"
                  min="0"
                  max="59"
                  value={seconds.toString()}
                  onChange={(e) => {
                    if (parseInt(e.target.value, 10) >= 60) {
                      return;
                    }
                    const value = e.target.value.replace(/^0+/, "") || "0";
                    setSeconds(parseInt(value, 10));
                  }}
                  className="custom-number-input w-16 text-center text-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setSeconds(seconds === 0 ? seconds : seconds - 1)
                  }
                >
                  ▼
                </Button>
              </div>
              <span className="text-xl font-semibold">'</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* <div className="flex flex-row items-center justify-center gap-2 mt-4">
        <Button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
            setMinutes(5);
            setTimeLeft(5 * 60);
          }}
          variant="outline"
        >
          5"
        </Button>
        <Button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
            setMinutes(25);
            setTimeLeft(25 * 60);
          }}
          variant="outline"
        >
          25"
        </Button>
        <Button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
            setMinutes(60);
            setTimeLeft(60 * 60);
          }}
          variant="outline"
        >
          60"
        </Button>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 mt-4">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMinutes(minutes === 99 ? minutes : minutes + 1)}
          >
            ▲
          </Button>
          <Input
            type="number"
            min="0"
            max="99"
            value={minutes.toString()}
            onChange={(e) => {
              if (parseInt(e.target.value, 10) >= 99) {
                return;
              }
              const value = e.target.value.replace(/^0+/, "") || "0";
              setMinutes(parseInt(value, 10));
            }}
            className="custom-number-input w-16 text-center text-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMinutes(minutes === 0 ? minutes : minutes - 1)}
          >
            ▼
          </Button>
        </div>
        <span className="text-xl font-semibold">"</span>
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSeconds(seconds === 59 ? seconds : seconds + 1)}
          >
            ▲
          </Button>
          <Input
            type="number"
            min="0"
            max="59"
            value={seconds.toString()}
            onChange={(e) => {
              if (parseInt(e.target.value, 10) >= 60) {
                return;
              }
              const value = e.target.value.replace(/^0+/, "") || "0";
              setSeconds(parseInt(value, 10));
            }}
            className="custom-number-input w-16 text-center text-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSeconds(seconds === 0 ? seconds : seconds - 1)}
          >
            ▼
          </Button>
        </div>
        <span className="text-xl font-semibold">'</span>
      </div> */}
    </div>
  );
}

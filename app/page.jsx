"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import TicketCard from "react-animated-3d-card";

export default function Home() {
  const [audio, setAudio] = useState();
  useEffect(() => {
    setAudio(new Audio("/dune-bagpipes.mp3"));
  }, []);

  const [showCard, setShowCard] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [endSequenceStarted, setEndSequenceStarted] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showTwink, setShowTwink] = useState(false);
  const [showEuphoria, setShowEuphoria] = useState(false);

  useEffect(() => {
    if (playing) {
      audio?.play();
    } else {
      audio?.pause();
    }
  }, [playing, audio]);

  const startEndSequence = useCallback(() => {
    setTheme("dark");
    setPlaying(true);
    setEndSequenceStarted(true);

    setTimeout(() => {
      setShowText(true);
    }, 1000);

    setTimeout(() => {
      setShowWeather(true);
    }, 9000);

    setTimeout(() => {
      setShowTwink(true);
    }, 7000);

    setTimeout(() => {
      setShowEuphoria(true);
    }, 13000);

    setTimeout(() => {
      setShowCard(true);
    }, 19000);
  }, []);

  const { setTheme } = useTheme();

  return (
    <>
      <div className="absolute z-20 flex w-full min-h-screen items-center justify-center">
        {!playing && !showCard && (
          <div className="flex flex-col items-center gap-3 max-w-screen-sm">
            <h1 className="text-4xl font-bold pb-2">Dear Ali,</h1>

            <p>
              Ever since you came into my life, every day has had a purpose, and
              everything I do has been for us. When I wake up in the morning,
              you're the first person I think about. When I go to sleep in the
              evening, thinking of you is what gives me the safety to fall
              asleep, because I know you'll still be there when I open my eyes
              again 💞.
            </p>

            <p>
              I can't wait to see you again in Austin and fly to Vancouver with
              you; we'll have so many slow mornings and long nights, explore
              everything from Yaletown to the continents together and try out
              every restaurant we find along the way 💕.
            </p>

            <p>
              You're the love of my life and my everything, and I can't wait to
              give you the biggest kiss the second I see you again and on all of
              the next Valentine's days :3
            </p>

            <p>
              While I can't give this to you in person just yet, I hope that the
              pipes under the ocean (& some magic spells I cast) can still send
              this little preview to you ^-^
            </p>

            <p className="pt-2 pb-4 font-bold">
              Are you ready to find out what it is? 💜
            </p>

            <div className="flex gap-4">
              <Button onClick={startEndSequence}>Yes! :3</Button>
              <Button
                variant="secondary"
                onClick={() => {
                  window.location = "/cat.webp";
                }}
              >
                No 😔
              </Button>
            </div>
          </div>
        )}

        {endSequenceStarted && !showCard && (
          <div className="flex flex-col justify-center items-center gap-16 p-16">
            <h1
              className={`text-4xl transition-all ease-in-out duration-1000 opacity-0 ${
                showText ? "opacity-100" : ""
              }`}
            >
              It includes ...
            </h1>

            <div class="grid grid-cols-3 gap-4 max-w-screen-xl transition-all ease-in-out duration-1000">
              <Card
                className={`transition-all ease-in-out duration-1000 opacity-0 ${
                  showWeather ? "opacity-100" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle>Austin-style weather</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <img src="/dune-painting.webp" alt="A painting from dune" />
                </CardContent>
              </Card>

              <Card
                className={`transition-all ease-in-out duration-1000 opacity-0 ${
                  showTwink ? "opacity-100" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle>Timothée Chalament</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    src="/timothee.webp"
                    alt="A picture of Timothée Chalament"
                  />
                </CardContent>
              </Card>

              <Card
                className={`transition-all ease-in-out duration-1000 opacity-0 ${
                  showEuphoria ? "opacity-100" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle>Zendaya</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <img src="/zendaya.jpg" alt="A picture of Zendaya" />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {endSequenceStarted && (
        <div className="absolute z-20 flex w-full min-h-screen items-center justify-center">
          <div
            class={`transition-all ease-in-out duration-1000 opacity-0 scale-0 ${
              showCard ? "opacity-100 scale-100" : ""
            }`}
          >
            <TicketCard
              style={{
                backgroundColor: "black",
                width: "756px",
                height: "540px",
                cursor: "pointer",
              }}
              onClick={() => setPlaying((v) => !v)}
              class={``}
            >
              <img
                style={{ position: "absolute" }}
                alt="Dune ticket background layer"
                src="/ticket-background.png"
              />
              <img
                style={{ position: "absolute" }}
                alt="Dune ticket title layer"
                src="/ticket-title.png"
              />
              <img
                style={{ position: "absolute" }}
                alt="Dune ticket specials layer"
                src="/ticket-specials.png"
              />
            </TicketCard>
          </div>
        </div>
      )}

      {endSequenceStarted && (
        <div
          class={`absolute z-10 w-auto min-w-full min-h-full max-w-none video-overlay transition-all ease-in-out duration-1000 opacity-0 ${
            showCard ? "opacity-100" : ""
          }`}
        ></div>
      )}

      {endSequenceStarted && (
        <video
          autoPlay
          loop
          muted
          class={`absolute w-auto min-w-full min-h-full max-w-none scale-150 transition-all ease-in-out duration-1000 opacity-0 ${
            showCard ? "opacity-100" : ""
          }`}
          playsInline
        >
          <source src="/dune-arrival-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
}

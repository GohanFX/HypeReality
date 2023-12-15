import Navbar from "@/components/Navbars/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { getIronSessionData } from "@/utils/session";
import {
  SessionProvider,
  useSession,
} from "@/components/Session/SessionContext";
import { LayoutProvider } from "@/components/LayoutContext";
import { Suspense, useEffect, useState } from "react";
import { IronSessionData } from "iron-session";
import Loading from "@/components/Lodaing";
import { SessionServer } from "@/components/Session/SessionServer";
import { NotificationBar } from "@/components/Notification/NotificationBar";

export const metadata: Metadata = {
  title: "HypeReality",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          " bg-gradient-to-b  from-slate-200 to-100% to-gray-200 overflow-x-hidden "
        }
      >
        <Suspense fallback={<Loading />}>
          <SessionServer>
            <LayoutProvider>
              <div>
                <Navbar />
                {children}
                <div className=" relative bottom-0 text-center text-comms h-screen">
                  <h3>
                    Made by <span className="text-firstPart">Szücs</span>{" "}
                    Levente
                  </h3>
                </div>
                <NotificationBar />
              </div>
            </LayoutProvider>
          </SessionServer>
        </Suspense>
      </body>
    </html>
  );
}

import React from "react";
import style from "./Overlay.module.css";
import Image from "next/image";
import Link from "next/link";

function Overlay() {
  return (
    <div className={style.overlay_container}>
      <Image
        src={"/logo.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
      <div className={style.overlay_innerContainer}>
        <h1>The Solana DeFi Spellbook</h1>
        <p>
          arcanaJ provides a local device interface for secure, open-source bot
          trading, allowing for custom strategies, accessible via app or Docker.
        </p>
      </div>
      <div className={style.overlay_button_container}>
        <div className={style.overlay_button_conainer_iner}>
          <div className={style.overlay_button_row}>
            <Link href={"https://docs.arcana.markets/"} target="_blank">
              <button>Doc</button>
            </Link>
            <Link
              href={
                "https://github.com/makolabs-xyz/arcana/releases/download/1.1/arcana-1.0.jar"
              }
              target="_blank"
            >
              <button>Download</button>
            </Link>
          </div>
          <Link href={"https://github.com/makolabs-xyz/arcana"}>
            <button>Start Hyperdrive Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Overlay;

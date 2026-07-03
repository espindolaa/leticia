"use client";

import { useMemo, useState } from "react";
import { products } from "./products";
import { tags, TagTitle } from "./tags";

import React = require("react");

function Tag({
  title,
  emoji,
  onSelected,
  isSelected,
}: {
  title: string;
  emoji: string;
  onSelected: () => void;
  isSelected: boolean;
}) {
  const bg = isSelected
    ? "bg-white font-bold text-black"
    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-900 ";

  return (
    <div
      className={`${bg} rounded-lg w-fit py-2 px-3 text-sm cursor-pointer flex flex-row items-center`}
      onClick={onSelected}
    >
      <span className="mr-1 text-xs">{emoji}</span>
      <span>{title}</span>
    </div>
  );
}

function Product({
  name,
  link,
  brand,
  website,
  imgSrc,
}: {
  name: string;
  link: string;
  brand: string;
  website: string;
  imgSrc: string;
}) {
  const description =
    website !== brand ? (
      <>
        <span>{brand}</span>
        <div className="bg-gray-300 w-1 h-1 rounded-full" />
        <span>{website}</span>
      </>
    ) : (
      <span>{brand}</span>
    );

  return (
    <div
      className="cursor-pointer border border-zinc-700 rounded-lg bg-zinc-900 mt-2 flex flex-row p-2 w-full items-center justify-start hover:bg-zinc-800 overflow-hidden min-h-22 h-22 w-24 "
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={imgSrc}
        className="size-18 object-contain rounded-lg  border-gray-100 p-1"
      />
      <div className="text-left ml-2">
        <h1 className="w-full text-left overflow-hidden text-wrap font-medium">
          {name}
        </h1>
        <div className="flex flex-row items-center text-gray-400 gap-2">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [searchText, setSearchText] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("Tudo");

  const productList = useMemo(() => {
    return products
      .filter((p) => {
        if (selected === "Tudo") {
          return true;
        }

        const shouldHide = !p.tags.includes(selected as TagTitle);

        if (
          shouldHide ||
          (searchText &&
            !p.name.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, selected, searchText]);

  return (
    <div className="text-white flex flex-col bg-black max-w-svw items-center min-h-svh md:pt-24 md:pb-12 pt-18 pb-6 overflow-y-auto overflow-x-hidden px-6 max-h-svh">
      <div className="flex flex-col items-center p-2">
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <img src="leticiaetc.png" className="w-48" />
            <span className="text-white mt-2">
              mostrando como eu organizo a minha vida ✨
            </span>
            <span className="text-zinc-500">alguns links são afiliados!</span>
            <div className="flex flex-row gap-2 mt-4 mb-6">
              <img
                src="tiktok.svg"
                className="size-7 cursor-pointer"
                onClick={() =>
                  window.open("https://www.tiktok.com/@leticiaetc", "_blank")
                }
              />
              <img
                src="youtube.svg"
                className="size-8 cursor-pointer"
                onClick={() =>
                  window.open("https://www.youtube.com/@aleticiaetc", "_blank")
                }
              />
              <img
                src="instagram.svg"
                className="size-8 cursor-pointer"
                onClick={() =>
                  window.open("https://www.instagram.com/aleticiaetc", "_blank")
                }
              />
            </div>
          </div>

          <div
            className="mb-2 w-[23rem] flex flex-row justify-between items-center bg-zinc-900 rounded-lg border border-zinc-700 cursor-pointer"
            onClick={() =>
              window.open("https://www.amazon.com.br/shop/leticiaetc", "_blank")
            }
          >
            <div className="px-4 py-6 flex flex-col">
              <span>Minha vitrine na Amazon</span>
            </div>
            <img src="amazon.svg" className="size-8 mr-4" />
          </div>

          <div
            className="mb-8  w-[23rem] flex flex-row justify-between items-center bg-zinc-900 rounded-lg border border-zinc-700 cursor-pointer"
            onClick={() =>
              window.open("https://collshp.com/leticiaetc", "_blank")
            }
          >
            <div className="px-4 py-6 flex flex-col">
              <span>Minha vitrine na Shopee</span>
            </div>
            <img src="shopee.svg" className="size-8 mr-4" />
          </div>

          <span className="mb-2 text-xl font-caprasimo">+ links</span>

          {/* <input 
              type="text" 
              placeholder="🔍 Pesquise aqui"
              className="w-full ml-0 h-8 bg-[#A5C6F2] border border-white text-white rounded-lg mt-2 mb-3 px-4 py-6"
              onChange={(event) => setSearchText(event.target.value)}/> */}
          {/* <div className="flex flex-row gap-1 mb-2 flex-wrap w-96">
            {tags.map((t) => (
              <Tag
                key={t.title}
                title={t.title}
                emoji={t.emoji}
                isSelected={selected === t.title}
                onSelected={() => setSelected(t.title)}
              />
            ))}
          </div> */}
        </div>

        <div className="flex flex-col items-center w-full min-h flex-1">
          {productList.length ? (
            productList.map((p) => (
              <Product
                key={`${p.name}-${p.link}`}
                name={p.name}
                brand={p.brand}
                link={p.link}
                imgSrc={p.imgSrc}
                website={p.website}
              />
            ))
          ) : (
            <span className="text-white">Nenhum resultado :(</span>
          )}
        </div>

        {/* <div className="flex flex-row gap-2 ml-auto mr-auto md:mt-18 mt-0 p-4 flex-none">
              <img 
                src="tiktok.svg" 
                className="size-7 cursor-pointer" 
                onClick={() => 
                  window.open("https://www.tiktok.com/@leticiaetc", "_blank")
                }
              />
              <img 
                src="youtube.svg" 
                className="size-8 cursor-pointer"
                onClick={() => 
                  window.open("https://www.youtube.com/@etcleticia", "_blank")
                }
                 />
          </div> */}
      </div>
    </div>
  );
}

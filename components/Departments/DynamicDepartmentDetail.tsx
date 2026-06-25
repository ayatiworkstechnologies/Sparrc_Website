"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type DetailSection = {
  heading?: string;
  content?: string | string[];
  image?: string;
  images?: string[];
  imageType?: "large" | "normal";
  layout?:
    | "imageLeft"
    | "imageRight"
    | "content"
    | "image"
    | "gallery"
    | "galleryLeft"
    | "galleryRight";
};

type SidebarItem = {
  title: string;
  href: string;
};

type Props = {
  title?: string;
  sections?: DetailSection[];
  sidebarItems?: SidebarItem[];
  activeHref?: string;
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function TextBlock({
  heading,
  content,
}: {
  heading?: string;
  content?: string | string[];
}) {
  return (
    <div>
      {heading && (
        <h2 className="mb-4 text-[28px] font-bold leading-tight text-[#1268d6] md:text-[36px]">
          {heading}
        </h2>
      )}

      {Array.isArray(content) ? (
        <div className="space-y-4">
          {content.map((item, index) => (
            <p key={index} className="text-[16px] leading-[1.9] text-black">
              {item}
            </p>
          ))}
        </div>
      ) : (
        content && (
          <p className="text-[16px] leading-[1.9] text-black">{content}</p>
        )
      )}
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[22px]">
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-[22px] object-cover ${
          large ? "h-[280px] md:h-[430px]" : "h-[220px] md:h-[270px]"
        }`}
      />
    </div>
  );
}

export default function DynamicDepartmentDetail({
  title,
  sections = [],
  sidebarItems = [],
  activeHref,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7fff8] px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08]" />

      <div className="relative mx-auto max-w-[1280px]">
        {sidebarItems.length > 0 && (
          <div className="mb-10 overflow-x-auto">
            <div className="mx-auto flex w-fit gap-3 rounded-full bg-white p-2">
              {sidebarItems.map((item) => {
                const active = item.href === activeHref;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap rounded-full px-5 py-3 text-[13px] font-bold transition ${
                      active
                        ? "bg-[#1268d6] text-white"
                        : "bg-[#f1f7ff] text-black hover:bg-[#1268d6] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-10 max-w-[920px] text-[30px] font-bold leading-tight text-[#1268d6] md:text-[44px]"
          >
            {title}
          </motion.h1>
        )}

        <div className="space-y-16">
          {sections.map((section, index) => {
            const hasContent = Boolean(section.heading || section.content);
            const hasImage = Boolean(section.image);
            const hasImages = Boolean(section.images?.length);

            if (
              section.layout === "galleryLeft" &&
              hasImages &&
              section.images
            ) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  className="grid items-center gap-10 md:grid-cols-2"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {section.images.map((img, imgIndex) => (
                      <ImageFrame
                        key={imgIndex}
                        src={img}
                        alt={`Assessment image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>

                  <TextBlock
                    heading={section.heading}
                    content={section.content}
                  />
                </motion.div>
              );
            }

            if (
              section.layout === "galleryRight" &&
              hasImages &&
              section.images
            ) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  className="grid items-center gap-10 md:grid-cols-2"
                >
                  <TextBlock
                    heading={section.heading}
                    content={section.content}
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    {section.images.map((img, imgIndex) => (
                      <ImageFrame
                        key={imgIndex}
                        src={img}
                        alt={`Assessment image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            }

            if (hasContent && hasImage && section.image) {
              const imageLeft = section.layout === "imageLeft";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  className="grid items-center gap-10 md:grid-cols-2"
                >
                  {imageLeft && (
                    <ImageFrame
                      src={section.image}
                      alt={section.heading || title || "Assessment image"}
                      large={section.imageType === "large"}
                    />
                  )}

                  <TextBlock
                    heading={section.heading}
                    content={section.content}
                  />

                  {!imageLeft && (
                    <ImageFrame
                      src={section.image}
                      alt={section.heading || title || "Assessment image"}
                      large={section.imageType === "large"}
                    />
                  )}
                </motion.div>
              );
            }

            if (hasImage && section.image) {
              return (
                <ImageFrame
                  key={index}
                  src={section.image}
                  alt={title || "Assessment image"}
                  large={section.imageType === "large"}
                />
              );
            }

            if (hasImages && section.images) {
              return (
                <div key={index} className="grid gap-5 md:grid-cols-2">
                  {section.images.map((img, imgIndex) => (
                    <ImageFrame
                      key={imgIndex}
                      src={img}
                      alt={`Assessment image ${imgIndex + 1}`}
                    />
                  ))}
                </div>
              );
            }

            if (hasContent) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                >
                  <TextBlock
                    heading={section.heading}
                    content={section.content}
                  />
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
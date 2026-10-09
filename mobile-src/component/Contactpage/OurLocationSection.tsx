"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  Phone,
  MapPin,
  Building2,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Main location                                                       */
/* ------------------------------------------------------------------ */

const LOCATION = {
  name: "SPARRC - Alwarpet",

  address:
    "#4, Alwarpet St, behind Hushpuppies Showroom, Seetammal Colony, Alwarpet, Chennai, Tamil Nadu 600018",

  phoneNumbers: [
    {
      label: "044-45066131",
      href: "tel:04445066131",
    },
    {
      label: "044-42059405",
      href: "tel:04442059405",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.031353120536!2d80.2529045!3d13.033675400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266360d32a0f9%3A0xbc4bfd812341d6d8!2sSparrc%20Institute%20Alwarpet!5e0!3m2!1sen!2sin!4v1785148072367!5m2!1sen!2sin",
};

/* ------------------------------------------------------------------ */
/* Branch types                                                        */
/* ------------------------------------------------------------------ */

type Branch = {
  name: string;
  address: string;
  phones?: string[];
  mapQuery?: string;
};

type BranchGroup = {
  title: string;
  branches: Branch[];
};

/* ------------------------------------------------------------------ */
/* All SPARRC branches                                                 */
/* ------------------------------------------------------------------ */

const branchGroups: BranchGroup[] = [
  {
    title: "Chennai Branch",

    branches: [
      {
        name: "Alwarpet",

        address:
          "#4, Alwarpet St, behind Hushpuppies Showroom, Seetammal Colony, MIG Colony, Alwarpet, Chennai, Tamil Nadu 600018",

        phones: [
          "044-45066131",
          "044-42059405",
          "9790944605",
          "09790944607",
        ],

        mapQuery: "SPARRC Institute Alwarpet Chennai",
      },

      {
        name: "Anna Nagar",

        address:
          "Door No.116, 936, 6th Ave, Aishwarya Colony, Thangam Colony, Anna Nagar, Chennai, Tamil Nadu 600040",

        phones: [
          "044 2618 1819",
          "9790944609",
          "044-4862 6549",
        ],

        mapQuery: "SPARRC Institute Anna Nagar Chennai",
      },

      {
        name: "Ashok Nagar",

        address:
          "No22/36, 18th Ave, Sector 10, Sector 13, Ashok Nagar, Chennai, Tamil Nadu 600083",

        phones: ["9840689902", "044 42144606"],

        mapQuery: "SPARRC Institute Ashok Nagar Chennai",
      },

      {
        name: "Adyar",

        address:
          "SPARRC Adyar 4th Floor, No 45 & 47, Gandhi Nagar 1st Main Road, Chennai 600020",

        phones: ["98400 01721"],

        mapQuery: "SPARRC Institute Adyar Chennai",
      },
      {
        name: "Ambattur",

        address:
          "SPARRC KINESIOHEALTH PVT LTD, Ground Floor, No. 123, Plot No. 1, Bharathi Nagar, Vijayalakshmi Puram, Red Hills Road, Ambattur, Chennai 600053",
        phones: ["99943 33105"],

        mapQuery: "SPARRC KINESIOHEALTH PVT LTD Ambattur Chennai",
      },

      {
        name: "Chromepet",

        address:
          "4, 7th Cross Road, CLC Works Rd, Chromepet, Chennai, Tamil Nadu 600047",

        phones: ["044 43858199", "8754441160"],

        mapQuery: "SPARRC Institute Chromepet Chennai",
      },

      {
        name: "Velachery",

        address:
          "Door No 17A, 7th Main Rd, Srinivasa Nagar, Ram Nagar, Velachery, Chennai, Tamil Nadu 600042",

        phones: ["044 2259 2995", "96772 11334"],

        mapQuery: "SPARRC Institute Velachery Chennai",
      },

      {
        name: "ECR",

        address:
          "No1, Newry Arcade, Copper Beach Road, SH 49, Panaiyur, Chennai, Tamil Nadu 600115",

        phones: ["965 965 0000", "9003000112"],

        mapQuery: "SPARRC Institute ECR Panaiyur Chennai",
      },

      {
        name: "Egmore",

        address:
          "New No 7A, 3rd Floor, Halls Road, Egmore, Chennai, Tamil Nadu 600008",

        phones: ["9789855888"],

        mapQuery: "SPARRC Institute Egmore Chennai",
      },

      {
        name: "Porur",

        address:
          "84/6 F. No. S3, Mugalivakkam Main Road, Madhanandhapuram, Mugalivakkam, Porur, Chennai, Tamil Nadu 600125",

        phones: ["9384111971"],

        mapQuery: "SPARRC Institute Porur Chennai",
      },
    ],
  },

  {
    title: "Tamil Nadu Branch",

    branches: [
      {
        name: "Tirupur",

        address:
          "Door No.120, Anu Business Center, 123, College Rd, KNP Puram, Odakkadu, Tiruppur, Tamil Nadu 641602",

        phones: ["96000 05563"],

        mapQuery: "SPARRC Institute Tiruppur Tamil Nadu",
      },

      {
        name: "Coimbatore",

        address:
          "No.104, Bashyakaralu Road West, R.S. Puram, Coimbatore - 641 002",

        phones: ["0422 4369612", "9677123775"],

        mapQuery: "SPARRC Institute RS Puram Coimbatore",
      },

      {
        name: "Pondicherry",

        address:
          "490, Mahatma Gandhi Rd, Chinnakadai, MG Road Area, Puducherry, 605001",

        phones: ["9962426660"],

        mapQuery: "SPARRC Institute Pondicherry",
      },

      {
        name: "Coimbatore",

        address:
          "699, Avinashi Rd, Puliakulam, Coimbatore, Tamil Nadu 641045",

        phones: ["75500 02015"],

        mapQuery: "SPARRC Institute Puliakulam Coimbatore",
      },

      {
        name: "Madurai",

        address:
          "2/2A, 8th Street, Deputy Collector Colony, KK Nagar, Madurai - 625020",

        phones: ["9840033470", "9659650000"],

        mapQuery: "SPARRC Institute KK Nagar Madurai",
      },
    ],
  },

  {
    title: "Bengaluru Branch",

    branches: [
      {
        name: "Whitefield",

        address:
          "167, Whitefield Main Rd, near Yamaha Showroom, Brooke Bond First Cross, Whitefield, Bengaluru, Karnataka 560066",

        phones: ["074065 55591"],

        mapQuery: "SPARRC Institute Whitefield Bengaluru",
      },

      {
        name: "Indra Nagar",

        address:
          "1st Floor, Divya Shakthi Building, 1201, 100 Feet Rd, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560038",

        phones: ["08040900208", "9880198118"],

        mapQuery: "SPARRC Institute Indiranagar Bengaluru",
      },

      {
        name: "Jayanagar Bangalore",

        address:
          "648, 22 Main Road, 32nd E Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041",

        phones: ["080 41288144", "97391 11175"],

        mapQuery: "SPARRC Institute Jayanagar Bengaluru",
      },
    ],
  },

  {
    title: "Others Branch",

    branches: [
      {
        name: "New Delhi",

        address:
          "3rd Floor, S357, RM Vats Marg, near HDFC Bank, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017",

        phones: ["098219 00267"],

        mapQuery: "SPARRC Institute Panchsheel Park New Delhi",
      },

      {
        name: "Hyderabad",

        address:
          "No 8-2-682/B-5, 4th Floor, VSP Icon, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",

        phones: ["077024 77704"],

        mapQuery: "SPARRC Institute Banjara Hills Hyderabad",
      },

      {
        name: "Mumbai",

        address:
          "323, Sushmore 2nd Floor, Linking Rd, next to Axis Bank, Khar, Khar West, Mumbai, Maharashtra 400052",

        phones: ["77 38 333967", "022 2605 2081"],

        mapQuery: "SPARRC Institute Khar West Mumbai",
      },

      {
        name: "Mumbai",

        address:
          "41, 4th Floor, West View, Corner of 1st Road & Linking Road, Above Axis Bank, Opp to Khoo-piyo, Khar Linking Road, Mumbai - 400052",

        phones: ["77 38 333967", "022 2605 2081"],

        mapQuery: "SPARRC Institute Linking Road Khar Mumbai",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mapVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.65,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ------------------------------------------------------------------ */
/* Helper functions                                                    */
/* ------------------------------------------------------------------ */

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function getMapUrl(branch: Branch) {
  const query =
    branch.mapQuery || `${branch.name} ${branch.address}`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function OurLocationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* ========================================================== */}
        {/* MAIN LOCATION                                              */}
        {/* ========================================================== */}

        <motion.div
          variants={sectionVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {/* Heading */}

          <motion.div variants={textVariants}>
            <h2 className="text-[22px] font-extrabold leading-tight tracking-[-0.4px] text-[#111827] sm:text-[28px]">
              Our Location
            </h2>

            <p className="mt-2 max-w-[620px] text-[13px] font-medium leading-[1.6] text-[#657288] sm:text-[15px]">
              Visit our specialized sports medicine &amp;
              physiotherapy center.
            </p>
          </motion.div>

          {/* Main location card */}

          <motion.article
            variants={cardVariants}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -3,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
            }}
            className="mt-5 overflow-hidden rounded-[18px] border border-[#dbe3ee] bg-white p-3 shadow-[0_10px_30px_rgba(30,49,80,0.07)] sm:mt-6 sm:rounded-[24px] sm:p-5"
          >
            {/* Google Map */}

            <motion.div
              variants={mapVariants}
              className="relative h-[220px] w-full overflow-hidden rounded-[14px] bg-[#eef2f7] sm:h-[300px] sm:rounded-[18px] lg:h-[360px]"
            >
              <iframe
                src={LOCATION.mapEmbedUrl}
                title="SPARRC Alwarpet location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </motion.div>

            {/* Main location details */}

            <motion.div
              variants={textVariants}
              className="px-1 pb-1 pt-4 sm:px-1 sm:pt-5"
            >
              <h3 className="text-[18px] font-extrabold leading-tight tracking-[-0.25px] text-[#111111] sm:text-[22px]">
                {LOCATION.name}
              </h3>

              {/* Address */}

              <div className="mt-3 flex items-start gap-2.5">
                <MapPin
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[#2445d8]"
                />

                <p className="max-w-[780px] text-[13px] font-medium leading-[1.7] text-[#657288] sm:text-[15px]">
                  {LOCATION.address}
                </p>
              </div>

              {/* Phone numbers */}

              <div className="mt-4 flex flex-col gap-2 sm:mt-5">
                {LOCATION.phoneNumbers.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    className="flex w-fit min-h-[28px] items-center gap-2.5 text-[14px] font-semibold text-[#2445d8] transition-opacity hover:opacity-75 sm:text-[16px]"
                  >
                    <Phone
                      size={17}
                      strokeWidth={2.3}
                      className="shrink-0"
                    />

                    <span>{phone.label}</span>
                  </a>
                ))}
              </div>

              {/* Google Maps directions */}

              <a
                href={getMapUrl({
                  name: LOCATION.name,
                  address: LOCATION.address,
                  phones: [],
                  mapQuery: "SPARRC Institute Alwarpet Chennai",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#2445d8] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#1935b8] active:scale-[0.98] sm:text-[13px]"
              >
                <Navigation size={15} />

                Get Directions

                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </motion.article>
        </motion.div>

        {/* ========================================================== */}
        {/* ALL BRANCH LOCATIONS                                       */}
        {/* ========================================================== */}

        <div className="mt-12 sm:mt-16 lg:mt-20">

          {/* Branch section heading */}

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2445d8] sm:text-[12px]">
              Our Branches
            </span>

            <h2 className="mt-2 text-[23px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#111827] sm:text-[30px] lg:text-[34px]">
              SPARRC Centers Across India
            </h2>

            <p className="mt-2 max-w-[650px] text-[13px] font-medium leading-[1.7] text-[#657288] sm:text-[15px]">
              Find your nearest SPARRC center and connect with
              our team for sports medicine, rehabilitation,
              and physiotherapy services.
            </p>
          </motion.div>

          {/* Branch groups */}

          <div className="mt-8 space-y-11 sm:mt-10 sm:space-y-14 lg:space-y-16">
            {branchGroups.map((group, groupIndex) => (
              <motion.div
                key={`${group.title}-${groupIndex}`}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Group heading */}

                <div className="mb-5 flex items-center gap-3 sm:mb-6">
                  <div className="h-[30px] w-[3px] shrink-0 rounded-full bg-[#2445d8] sm:h-[36px]" />

                  <div>
                    <h3 className="text-[19px] font-bold leading-tight text-[#111827] sm:text-[23px]">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-[12px] font-medium text-[#657288] sm:text-[13px]">
                      {group.branches.length}{" "}
                      {group.branches.length === 1
                        ? "Center"
                        : "Centers"}
                    </p>
                  </div>
                </div>

                {/* Responsive branch grid */}

                <div className="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {group.branches.map((branch, index) => (
                    <BranchCard
                      key={`${group.title}-${branch.name}-${index}`}
                      branch={branch}
                      prefersReducedMotion={
                        !!prefersReducedMotion
                      }
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Branch card                                                         */
/* ------------------------------------------------------------------ */

function BranchCard({
  branch,
  prefersReducedMotion,
}: {
  branch: Branch;
  prefersReducedMotion: boolean;
}) {
  const phones = branch.phones ?? [];
  const mapUrl = getMapUrl(branch);

  return (
    <motion.article
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
            }
      }
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[16px] border border-[#e3e8f0] bg-white p-4 shadow-[0_5px_22px_rgba(30,49,80,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#cbd6f5] hover:shadow-[0_12px_32px_rgba(30,49,80,0.09)] sm:rounded-[20px] sm:p-5"
    >
      {/* Top accent */}

      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#2445d8] transition-all duration-500 group-hover:w-full" />

      {/* Branch name */}

      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#edf2ff] text-[#2445d8] sm:h-[40px] sm:w-[40px]">
          <Building2
            size={19}
            strokeWidth={2}
          />
        </div>

        <h4 className="min-w-0 text-[16px] font-bold leading-[1.4] text-[#111827] sm:text-[18px]">
          {branch.name}
        </h4>
      </div>

      {/* Address */}

      <div className="mt-4 flex min-w-0 items-start gap-2.5 sm:mt-5">
        <MapPin
          size={17}
          strokeWidth={2}
          className="mt-[3px] shrink-0 text-[#2445d8]"
        />

        <p className="min-w-0 break-words text-[13px] font-medium leading-[1.7] text-[#657288] sm:text-[13.5px]">
          {branch.address}
        </p>
      </div>

      {/* Phone numbers */}

      {phones.length ? (
        <div className="mt-4 flex min-w-0 items-start gap-2.5">
          <Phone
            size={17}
            strokeWidth={2}
            className="mt-[3px] shrink-0 text-[#2445d8]"
          />

          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2">
            {phones.map((phone, index) => (
              <a
                key={`${phone}-${index}`}
                href={getPhoneHref(phone)}
                className="inline-flex min-h-[24px] items-center break-all text-[13px] font-semibold leading-5 text-[#2445d8] transition-colors duration-200 hover:text-[#152d9b]"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {/* Directions button */}

      <div className="mt-auto pt-6">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${branch.name} location on Google Maps`}
          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#2445d8] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#1935b8] active:scale-[0.98] sm:text-[12px]"
        >
          Get Directions

          <ArrowUpRight
            size={15}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}

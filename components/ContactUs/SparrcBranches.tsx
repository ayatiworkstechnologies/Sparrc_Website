"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

type Branch = {
  name: string;
  address: string;
  phones: string[];
  mapQuery?: string;
};

type BranchGroup = {
  title: string;
  branches: Branch[];
};

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

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.09,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SparrcBranches() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-36 top-40 h-[340px] w-[340px] rounded-full bg-[#f5f1ff] blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-52 h-[340px] w-[340px] rounded-full bg-[#eafcff] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1220px]">
        {/* Page heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#343039]">
            Branch
          </span>

          <h2 className="mt-3 font-jost text-[27px] font-semibold leading-tight tracking-[-0.025em] text-[#17151a] sm:text-[34px] lg:text-[38px]">
            SPARRC Centers Across India
          </h2>
        </motion.div>

        <div className="space-y-14 sm:space-y-16">
          {branchGroups.map((group, groupIndex) => (
            <motion.div
              key={`${group.title}-${groupIndex}`}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
            >
              {/* Branch group heading */}
              <motion.div
                variants={cardVariants}
                className="mb-7 flex items-center gap-3 sm:mb-8"
              >
                <div className="h-10 w-[3px] rounded-full bg-[#24bfc2]" />

                <h3 className="font-jost text-[21px] font-semibold text-[#1b191e] sm:text-[24px]">
                  {group.title}
                </h3>
              </motion.div>

              {/* Equal height card grid */}
              <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {group.branches.map((branch, index) => (
                  <BranchCard
                    key={`${group.title}-${branch.name}-${index}`}
                    branch={branch}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchCard({ branch }: { branch: Branch }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branch.mapQuery || `${branch.name} ${branch.address}`,
  )}`;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.28,
          ease: "easeOut",
        },
      }}
      className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[18px] border border-[#eeebf2] bg-white p-5 shadow-[0_8px_28px_rgba(35,27,65,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#ddd5fa] hover:shadow-[0_20px_48px_rgba(59,39,120,0.13)] sm:min-h-[320px] sm:p-6"
    >
      {/* Hover gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(250,248,255,0.9),rgba(255,255,255,0)_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top animated accent */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[linear-gradient(90deg,#ff6847,#6237ff)] transition-all duration-500 group-hover:w-full" />

      <div className="relative flex h-full flex-col">
        {/* Branch title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#fff3ef] text-[#ff6545] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
            <Building2 size={16} strokeWidth={2} />
          </div>

          <h4 className="font-jost text-[16px] font-semibold text-[#242027] sm:text-[17px]">
            {branch.name}
          </h4>
        </div>

        {/* Address */}
        <div className="mt-6 flex items-start gap-3">
          <MapPin
            size={17}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#ff6545]"
          />

          <p className="text-[13px] leading-[1.7] text-[#4e4954] sm:text-[13.5px]">
            {branch.address}
          </p>
        </div>

        {/* Phone numbers */}
        <div className="mt-5 flex items-start gap-3">
          <Phone
            size={16}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#ff6545]"
          />

          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {branch.phones.map((phone, index) => (
              <span
                key={`${phone}-${index}`}
                className="inline-flex items-center"
              >
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="text-[12px] leading-5 text-[#4e4954] transition-colors duration-200 hover:text-[#5b31f4] sm:text-[12.5px]"
                >
                  {phone}
                </a>

                {index < branch.phones.length - 1 && (
                  <span className="ml-1.5 text-[#aaa5af]">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Push button to bottom for equal alignment */}
        <div className="mt-auto pt-7">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${branch.name} location`}
            className="group/button inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#6439ff_0%,#4b21f3_100%)] px-6 text-[10px] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_9px_22px_rgba(84,43,241,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_13px_28px_rgba(84,43,241,0.35)] active:translate-y-0"
          >
            Know More

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
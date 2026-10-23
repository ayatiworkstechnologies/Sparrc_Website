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
  phones?: string[];
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
          "No. 4, VM Towers, Alwarpet Street, Alwarpet, Chennai - 600018. Landmark: Opp. to Old Madras Baking Company.",
        phones: [
          "044-45066131",
          "044-42059405",
          "9790944605",
          "9790944607",
        ],
        mapQuery: "SPARRC Institute Alwarpet Chennai",
      },
      {
        name: "Anna Nagar",
        address:
          "Plot No. 936, Door No. 116, 6th Avenue, Anna Nagar, Chennai - 600040",
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
          "No. 22/36, 18th Avenue, Ashok Nagar, Chennai - 600083",
        phones: ["044 42144606", "9790700712"],
        mapQuery: "SPARRC Institute Ashok Nagar Chennai",
      },
      {
        name: "Adyar",
        address:
          "4th Floor, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020. Landmark: 4th Floor of Odyssey Book Store.",
        phones: ["98400 01721"],
        mapQuery: "SPARRC Institute Adyar Chennai",
      },
      {
        name: "Chrompet",
        address:
          "No. 4, 7th Main Road, New Colony, Chrompet, Chennai - 600044. Landmark: Near Government Girls High School.",
        phones: ["044 43858199", "8754441160"],
        mapQuery: "SPARRC Institute Chrompet Chennai",
      },
      {
        name: "Velachery",
        address:
          "Door No. 17A, Ram Nagar North Extension, 7th Main Road Extension, Velachery East, Chennai - 600042",
        phones: [],
        mapQuery: "SPARRC Institute Velachery Chennai",
      },
      {
        name: "ECR",
        address:
          "Door No. 1, 6B, Copper Beach Road, Newry Arcade, Panaiyur, ECR, Chennai - 600119",
        phones: ["044 46008361", "90030 00112"],
        mapQuery: "SPARRC Institute ECR Panaiyur Chennai",
      },
      {
        name: "Egmore",
        address:
          "New No. 7A (Old No. 2 to 4), Third Floor, Halls Road, Egmore, Chennai - 600008",
        phones: ["9789855888"],
        mapQuery: "SPARRC Institute Egmore Chennai",
      },
      {
        name: "Porur",
        address:
          "No. 84/6, F. No. S3, Mugalivakkam Main Road, Madhanandhapuram, Mugalivakkam, Porur, Chennai - 600125",
        phones: ["9384111971"],
        mapQuery: "SPARRC Institute Porur Chennai",
      },
    ],
  },
  {
    title: "Tamil Nadu Branch",
    branches: [
      {
        name: "Tiruppur",
        address:
          "Anu Business Center, Door No. 120-123, College Road, Tiruppur - 641602",
        phones: ["96000 05563"],
        mapQuery: "SPARRC Institute Tiruppur Tamil Nadu",
      },
      {
        name: "Coimbatore - R.S. Puram",
        address:
          "No. 104, Bashyakaralu Road West, R.S. Puram, Coimbatore - 641002",
        phones: ["0422 4369612"],
        mapQuery: "SPARRC Institute RS Puram Coimbatore",
      },
      {
        name: "Puducherry",
        address:
          "No. 490, 2nd Floor, Mahatma Gandhi Road, Chinnakadai, Puducherry - 605001",
        phones: ["9962426660"],
        mapQuery: "SPARRC Institute Puducherry",
      },
      {
        name: "Coimbatore - Avinashi Road",
        address:
          "699, Avinashi Road, Opp. to G.K.N.M. Signal, Near Revel Bike Showroom, Coimbatore - 641037",
        phones: ["0422 6794587", "75500 02015"],
        mapQuery: "SPARRC Institute Avinashi Road Coimbatore",
      },
      {
        name: "Madurai",
        address:
          "2/2A, 8th Street, Deputy Collector Colony, K.K. Nagar, Madurai - 625020",
        phones: ["98400 33470"],
        mapQuery: "SPARRC Institute KK Nagar Madurai",
      },
    ],
  },
  {
    title: "Bengaluru Branch",
    branches: [
      {
        name: "Bengaluru - Whitefield",
        address:
          "167, Whitefield Main Road, Near Forum Value Mall, Bengaluru - 560066",
        phones: ["74065 55591"],
        mapQuery: "SPARRC Institute Whitefield Bengaluru",
      },
      {
        name: "Bengaluru - Indira Nagar",
        address:
          "Divya Shakthi Building, First Floor, 1201, 100 Feet Road, HAL 2nd Stage, Doopanahalli, Indira Nagar, Bengaluru, Karnataka - 560038",
        phones: ["08040900208", "9880198118"],
        mapQuery: "SPARRC Institute Indiranagar Bengaluru",
      },
      {
        name: "Bengaluru - Jayanagar",
        address:
          "648, 22 Main, 32 'E' Cross, Jayanagar 4th 'T' Block, Bengaluru - 560041. Landmark: Next to Rajiv Gandhi University, Opposite to Axis Bank.",
        phones: ["97391 11175", "99622 71175"],
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
          "S357 RM Vats Marg (Third Floor), Panchsheel Park, Near HDFC Bank, South Delhi, New Delhi - 110017",
        phones: ["011 4183 9002", "+91 98219 00267"],
        mapQuery: "SPARRC Institute Panchsheel Park New Delhi",
      },
      {
        name: "Hyderabad - Banjara Hills",
        address:
          "No. 8-2-682/B-5, 4th Floor, VSP Icon, No. 12, Banjara Hills, Hyderabad - 500034. Landmark: Kotak Mahindra Bank.",
        phones: ["040-2339 7704", "77024 77704"],
        mapQuery: "SPARRC Institute Banjara Hills Hyderabad",
      },
      {
        name: "Mumbai",
        address:
          "4th Floor, West View, 62, Linking Road, Khar, Khar West, Mumbai, Maharashtra - 400052",
        phones: ["77383 33967"],
        mapQuery: "SPARRC Institute Khar West Mumbai",
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
  const phones = branch.phones ?? [];
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
        {phones.length ? (
          <div className="mt-5 flex items-start gap-3">
            <Phone
              size={16}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-[#ff6545]"
            />

            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
              {phones.map((phone, index) => (
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

                  {index < phones.length - 1 && (
                    <span className="ml-1.5 text-[#aaa5af]">
                      /
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ) : null}

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

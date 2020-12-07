export const REGION = [
  { id: "us-east-1", label: "US-East-1" },
  { id: "us-east-2", label: "US-East-2" },
  { id: "us-west-1", label: "US-West-1" },
  { id: "india", label: "India" },
];

export const TABS = [
  { id: "image", label: "Choose Image", tabNum: 1 },
  { id: "instance", label: "Choose Instance Type", tabNum: 2 },
  { id: "storage", label: "Choose Storage and Network", tabNum: 3 },
  { id: "security", label: "Choose Security", tabNum: 4 },
  { id: "review", label: "Review and Launch", tabNum: 5 },
];

export const PLATFORM_CARDS = [
  {
    imageTitle: "Linux 2 Image, Ubuntu Server 18.04 LTS",
    imageText:
      "Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance.",
    singleBit: false,
    cost: 243.61,
  },
  {
    imageTitle: "Red Hat Enterprise Linux 8",
    imageText:
      "Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance.",
    singleBit: false,
    cost: 300,
  },
  {
    imageTitle: "Microsoft Windows Server 2019 Base",
    imageText:
      "Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance.",
    singleBit: true,
    cost: 338,
  },
  {
    imageTitle: "SUSE Linux Enterprise Server",
    imageText:
      "Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance.",
    singleBit: false,
    cost: 200.22,
  },
];

export const BIT_TYPES = [
  { id: "86", label: "64-bit (x86)" },
  { id: "ARM", label: "64-bit (ARM)" },
];
export const WINDOWS_IMAGE_REGION = ["us-east-1", "us-east-2"];
export const INSTANCE_TYPES = [
  {
    id: "general-purpose",
    label: "General Purpose",
    cores: [1, 2, 4],
    memory: ["256 MB", "512 MB", "1 GB", "2 GB", "4 GB"],
  },
  {
    id: "storage-optimized",
    label: "Storage Optimized",
    cores: [1, 8, 16],
    memory: ["16 GB", "32 GB", "64 GB"],
  },
  {
    id: "network-optimized",
    label: "Network Optimized",
    cores: [1, 2, 4, 8, 16],
    memory: [
      "256 MB",
      "512 MB",
      "1 GB",
      "2 GB",
      "4 GB",
      "16 GB",
      "32 GB",
      "64 GB",
    ],
  },
  {
    id: "compute-optimized",
    label: "Compute Optimized",
    cores: [1, 2, 8, 16],
    memory: ["16 GB", "32 GB", "64 GB"],
  },
];

//DEFAULTS
export const DEFAULT_BITTYPE = "86";
export const DEFAULT_ESTIMATE = {
  text: "Linux 2 Image, Ubuntu Server 18.04 LTS",
  cost: 243.61,
  tab: 1,
};
export const DEFAULT_INSTANCE_TYPE = "general-purpose";

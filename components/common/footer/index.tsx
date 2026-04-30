import FacebookIcon from "@/icons/facebookIcon";
import InstagramIcon from "@/icons/instagramIcon";
import Link from "next/link";
import { SanityImage } from "../sanityImage";
import { SettingsQueryResult } from "@/sanity.types";

const Footer = ({ data }: { data: NonNullable<SettingsQueryResult> }) => {
  return (
    <div className="bg-casual-navy leading-[115%]">
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-20">
          <div>
            <Link href="/">
              <SanityImage
                src={data.footerLogo}
                alt={data.footerLogo.alt}
                width={100}
                height={100}
                className="object-contain h-[50px] sm:h-[56px] w-auto"
              />
            </Link>
            <div className="flex flex-col gap-10 mt-10 lg:flex-row lg:gap-20 xl:gap-40 ">
              <div className="flex flex-col gap-2 sm:gap-3 shrink-0 ">
                <h4 className="text-lg font-semibold text-subtle-white sm:text-xl">
                  {data.socialMediaLinksTitle}
                </h4>
                <div className="flex flex-wrap items-center w-full gap-4">
                  <Link href="https://www.instagram.com/" target="_blank">
                    <InstagramIcon className="duration-300 fill-white hover:fill-deep-bright-red" />
                  </Link>
                  <Link href="https://www.facebook.com/" target="_blank">
                    <FacebookIcon className="duration-300 fill-white hover:fill-deep-bright-red" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 sm:gap-y-16 gap-x-10 grow">
                {data.footerLinksGroups.map((group) => (
                  <div
                    key={group._key}
                    className="flex flex-col w-full gap-2 sm:gap-4"
                  >
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {group.title}
                    </p>
                    <div className="grid w-full grid-cols-1 min-[420px]:grid-cols-2 lg:gap-x-6 xl:gap-x-10 gap-y-2 sm:gap-y-4">
                      {group.linksList.map((link) => (
                        <Link
                          key={link.label}
                          href={`${link.url}`}
                          className="text-subtle-white w-fit text-base sm:text-[18px] hover:text-deep-bright-red duration-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col w-full gap-4 md:col-span-2">
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Topics
                  </p>
                  <div className="grid w-full min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-6 xlgap-x-10 gap-y-4">
                    {data.topics.map((topic) => (
                      <Link
                        key={topic._id}
                        href={`/${topic.slug}`}
                        className="text-subtle-white w-fit text-base sm:text-[18px] hover:text-deep-bright-red duration-300"
                      >
                        {topic.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full text-sm text-white/50">
            © {new Date().getFullYear()} VersCredit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

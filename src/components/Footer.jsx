import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="m-16">
        <hr className="w-[75%] mx-auto border-t-2 bg-orange-300" />
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-25">
          <div className="lg:col-span-2 flex flex-wrap justify-between mt-6">
            <div>
              <h6 className="font-medium text-orange-600 mt-5">Explore</h6>
              <ul>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Careers
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Our Work
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Talent Management Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-orange-600 mt-5">Channels</h6>
              <ul>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Instagram Marketing Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  TikTok Marketing Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  YouTube Marketing Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Twitch Marketing Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Snapchat Marketing Agency
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-orange-600 mt-5">Services</h6>
              <ul>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Influencer Marketing
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Social Strategy
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Video Production
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Paid Social
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Socail Commerce
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Social Media Moderation
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-orange-600 mt-5 ">
                Local Services
              </h6>
              <ul>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Influencer Marketing USA
                </li>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Paid Media Agency USA
                </li>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Influencer Marketing Agency UK
                </li>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Paid Media Agency UK
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-orange-600 mt-5">Topics</h6>
              <ul>
                <li className="pt-3 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Affiliate Influencer Marketing
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Agency
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  B2B Influencers
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Sports Influencers
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Music Influencers
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  Beauty Influencers
                </li>
                <li className="py-1 text-sm hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                  B2B Social Media Agency
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex gap-5 md:w-[50%] my-6">
            <h3 className="text-orange-500 font-bold">Let's Connect</h3>
            <FaFacebook
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
            <FaInstagram
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
            <FaTwitter
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
            <FaYoutube
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
            <FaEnvelope
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
            <FaLinkedin
              size={30}
              className="hover:text-[#ff7f50] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <div className="hidden sm:flex bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 rounded-md w-fit p-4 justify-between gap-6">
            <div>
              <h3 className="font-bold text-white">Newsletter</h3>
              <p>
                Insight led, culturally intelligent, globally relevant,
                platform-agnostic. Subscribe for the latest news in social
                marketing
              </p>
            </div>
            <div className="bg-gray-800 text-white border-2 inline-block w-[35%] my-auto px-2 py-3">
              LEARN MORE {">"}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-2 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} 4 Fox. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

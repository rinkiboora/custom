'use client';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const faqList = [
  {
    question: 'Fermentum in hac mattis viverra orem commodo?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
  {
    question: 'Viverra ipsum gravida etiam sem iaculis?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
  {
    question: ' Morbi curabitur suscipit id posuere?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
  {
    question: ' Cursus sit sit velsem accumsan varius sed auris?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
  {
    question: ' Dui tincidunt sed eu convallis quis ultrices?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
  {
    question: 'Q6. Arcu lorem faucibus eu integer orci pretium faucibus?',
    answer:
      'Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  useEffect(() => {
    faqList.forEach((_, idx) => {
      if (contentRefs.current[idx]) {
        if (idx === openIndex) {
          contentRefs.current[idx].style.maxHeight = contentRefs.current[idx].scrollHeight + 'px';
        } else {
          contentRefs.current[idx].style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-black overflow-hidden text-white py-12 px-4 relative">
      <div className=" max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          FAQ<span className="text-yellow-500">s</span>
        </h2>

        {faqList.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-700 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(idx)}>
              <h3
                className={` sm:text-xm  md:text-base lg:text-xl font-semibold flex-1 ${
                  idx === openIndex ? 'text-yellow-500' : ''
                }`}>
                Q{idx + 1}. {faq.question}
                {idx === openIndex && <span className="ml-2 text-yellow-400"></span>}
              </h3>
              {idx === openIndex ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            <div
              ref={(el) => (contentRefs.current[idx] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: idx === openIndex ? 'none' : '0px' }}>
              <p className="mt-2 text-sm lg:text-base font-normal text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[-30%] hidden lg:flex right-0 z-0">
        <Image src="/image/png/leyar3.png" alt="Decor Layer" width={300} height={300} />
      </div>
      <div className="absolute bottom-[-0%] hidden lg:flex  z-0">
        <Image src="/image/png/XMLID_2_.png" alt="Decor Layer" width={100} height={100} />
      </div>
      <div className="absolute  top-0 right-0 hidden lg:flex  z-0">
        <Image src="/image/png/XMLID_2_.png" alt="Decor Layer" width={100} height={100} />
      </div>
    </section>
  );
}

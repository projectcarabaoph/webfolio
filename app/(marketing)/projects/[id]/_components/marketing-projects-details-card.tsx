import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { Card, CardContent } from '@/components/ui/card'
import ListComponent from '@/components/shared/list-component'
import SplitText from '@/components/shared/split-text'

import { IProjectList, TTechnologies } from '@/utils/constants/_types'


export default function MarketingProjectsDetailsCard({ project }: { project: IProjectList }) {
  return (
    <Card className="hover:shadow-lg  hover:shadow-custom-purple-950 bg-neutral-950 border p-0 pb-4 min-h-[384px] h-auto border-custom-purple-800 w-full   mx-auto overflow-hidden">
      <div className="relative h-32 bg-red-200 ">
        <Image src={project.images[0]} alt="Project conclusion dashboard" fill className="top-0 object-cover" />
      </div>

      <CardContent >
        <div className="flex flex-col gap-8">
          <span className="text-2xl font-semibold text-neutral-200 hover:underline">{project.title}</span>

          <div className="flex flex-col gap-2">
            <span className='text-neutral-200 uppercase'>Links</span>
            <div className="flex flex-row flex-wrap gap-4">
              {project.demo_url && (
                <Link href={project.demo_url} className="flex flex-row gap-2 text-custom-purple-200 hover:text-neutral-200 bg-custom-purple-950  border border-custom-purple-800 py-1 px-2 rounded-md">
                  <Icon icon="mdi:external-link"
                    width="24"
                    height="24"
                  />
                  <span>Demo</span>
                </Link>
              )}
              {project.repo_url?.[0] && (
                <Link href={project.repo_url?.[0]} className="flex flex-row gap-2 text-custom-purple-200 hover:text-neutral-200 bg-custom-purple-950  border border-custom-purple-800 py-1 px-2 rounded-md">
                  <Icon icon="mdi:github"
                    width="24"
                    height="24"
                  />
                  <span>Github</span>
                </Link>
              )}
              {project.repo_url?.[1] && (
                <Link href={project.repo_url?.[1]} className="flex flex-row gap-2 text-custom-purple-200 hover:text-neutral-200 bg-custom-purple-950  border border-custom-purple-800 py-1 px-2 rounded-md">
                  <Icon icon="mdi:github"
                    width="24"
                    height="24"
                  />
                  <span>Github</span>
                </Link>
              )}
            </div>
          </div>

          <div>
            <span className='text-neutral-200 uppercase'>Skills</span>

            <ListComponent
              as="div"
              className="flex flex-row flex-wrap gap-2"
              data={project.technologies}
              renderItem={(tech: TTechnologies) => (
                <SplitText
                  key={tech.name}
                  text={tech.name}
                  className="bg-custom-purple-950 text-custom-purple-200   text-[12px] p-2 rounded-md"
                  delay={5}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />

              )}
            />
          </div>

          <div>
            <span className='text-neutral-200 uppercase'>About</span>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client";


import Button from "@sellify/common-ui-components/buttons/Button";
import IconButton from "@sellify/common-ui-components/buttons/IconButton";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

import Section from "./components/Section";
import SectionItem from "./components/SectionItem";
import PlusIcon from "../../public/plus";


export default function Home() {

  return (
    <div className="min-h-full">
      <header className="h-16 bg-gray-800   px-4 sm:px-6 lg:px-8">
      </header>
      <main className="flex flex-col w-full ">

        <Section title={"Button"} >
          <SectionItem>
            <Button>
              Default Button<PlusIcon style="size-6" />
            </Button>

            <Button variant="outline">
              Outline Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="destructive">
              Destructive Button <PlusIcon style="size-6" />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button disabled>
              Disabled Default<PlusIcon style="size-6" />
            </Button>

            <Button disabled variant="outline">
              Disabled Outline<PlusIcon style="size-6" />
            </Button>

            <Button disabled variant="destructive">
              Disabled Destructive <PlusIcon style="size-6" />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button size="small">
              Small Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="outline" size="small">
              Small Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="destructive" size="small">
              Small Button<PlusIcon style="size-6" />
            </Button>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Icon Button"} >
          <SectionItem>
            <IconButton >
              <PlusIcon style="size-6" />
            </IconButton>

            <IconButton disabled >
              <PlusIcon style="size-6" />
            </IconButton>
          </SectionItem>

          <SectionItem>
            <IconButton variant="outline" >
              <PlusIcon style="size-6" />
            </IconButton>

            <IconButton variant="outline" disabled >
              <PlusIcon style="size-6" />
            </IconButton>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Link Button"} >
          <SectionItem>
            <LinkButton >
              Link Button
            </LinkButton>
            <LinkButton >
              Link Button <PlusIcon style="size-6" />
            </LinkButton>
            <LinkButton >
              <PlusIcon style="size-6" /> Link Button
            </LinkButton>
            <div className="bg-black text-white">
              <LinkButton >
                Link Button
              </LinkButton>
            </div>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Transparent Icon Button"} >
          <SectionItem>
            <TransparentIconButton >
              <PlusIcon style="size-6" />
            </TransparentIconButton>

            <TransparentIconButton disabled >
              <PlusIcon style="size-6" />
            </TransparentIconButton>
          </SectionItem>

          <SectionItem>
            <TransparentIconButton variant="destructive" >
              <PlusIcon style="size-6" />
            </TransparentIconButton>

            <TransparentIconButton variant="destructive" disabled >
              <PlusIcon style="size-6" />
            </TransparentIconButton>
          </SectionItem>
        </Section>

      </main>
    </div>
  );
}

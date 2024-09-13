import { useState } from "react"

import { content } from "../data/content"

import { Card } from "./card"
import { Rescue } from "./rescue"
import { Presentation } from "./presentation"
import { PopUp } from "./popup"

export function Quiz() {

  const [step, setStep] = useState<number>(1)

  const handleNextStep = () => {
    setStep((step) => step + 1)
  }

  if (step === 1) {
    return (
      <Presentation
        onSubmit={handleNextStep}
      />
    )
  }
  if (step === 2) {
    return (
      <>
        <Card
          content={content.cardContent[0]}
          starsType={0}
          onSubmit={handleNextStep}
        />
        <PopUp />
      </>
    )
  }
  if (step === 3) {
    return (
      <Card
        content={content.cardContent[1]}
        starsType={0}
        onSubmit={handleNextStep}
      />
    )
  }
  if (step === 4) {
    return (
      <Card
        content={content.cardContent[2]}
        starsType={0}
        onSubmit={handleNextStep}
      />
    )
  }
  if (step === 5) {
    return (
      <Card
        content={content.cardContent[3]}
        starsType={0}
        onSubmit={handleNextStep}
      />
    )
  }
  if (step === 6) {
    return (
      <Rescue />
    )
  }
}

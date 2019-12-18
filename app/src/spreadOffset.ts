type GenericObject = {[prop: string]: any}

interface UnpolishedKeyframe extends GenericObject {
  offset?: number
}

interface PolishedKeyframe extends GenericObject {
  offset: number
}

type UnpolishedKeyframes = UnpolishedKeyframe[]
type PolishedKeyframes   = PolishedKeyframe[]

export default function(keyframes: UnpolishedKeyframes): PolishedKeyframes {
  keyframes[0].offset = 0;
  keyframes[keyframes.length-1].offset = 1;
  if (keyframes.length === 2) return
  let last = 1
  let lastOffset = -1;
  for (let i = last; i < keyframes.length; i++) {
    let l = i + 1
    let o = keyframes[i].offset
    if (o !== undefined && o !== null) {
      if (o >= lastOffset && o >= 0 && o <= 1) {
        lastOffset = o
        keyframes.slice(last, l);
        let start = keyframes[last - 1].offset
        let end = keyframes[i].offset;
        let space = (end - start) / (l - last)
        let offset = start
        for (let j = last; j < i; j++) {
          offset += space
          keyframes[j].offset = offset;
        }
        last = l
      }
      else throw "Offsets must be given in incrementing sequence, spanning between 0 - 1"
    }
  }

  return keyframes as PolishedKeyframes
}

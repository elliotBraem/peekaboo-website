/**
 * importAll: Takes in a context and imports all files of type
 * and saves for export
 * @param {context} resolve: context to import all the files of type from
 * @return {array} files: imported array of files of type
 */
const importAll = resolve => {
  const files = {}
  resolve.keys().forEach(key => {
    files[key] = resolve(key)
  })
  return files
}

const crayonImgs = importAll(
  require.context('~/assets/img/crayon-props', true, /\.svg$/)
)

const treatments = [
  'interoception',
  'regulation',
  'sensory processing',
  'motor skills',
  'play',
  'social skills',
  'speech and language',
  'feeding',
  'visual impairments',
  'hearing impairments',
  'assistive technology',
  'movement and handling',
  'trauma and attachment'
]

export const state = () => ({
  treatments: treatments,
  crayonImgs: Object.values(crayonImgs)
})

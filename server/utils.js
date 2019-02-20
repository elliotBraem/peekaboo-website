const { readdirSync } = require('fs')
const { join } = require('path')

// /**
//  * Checks if the source is a file
//  * @param {string}: source - file/folder to check
//  * @return {boolean} True if file, else false
//  */
// const isFile = source => lstatSync(source).isFile

/**
 * Return the directories in .../'source'
 * @param {string}: source - folder to check
 * @return {array} The directories in .../'source'
 */
const getFiles = source =>
  readdirSync(source) // Read this directory
    .map(name => join(source, name)) // For all contents, create path 'source/name'
    .filter(isMarkdown) // Check that content is a directory

/**
 * Return true if file is of type .md in source
 * @param {string}: source - file to check
 * @return {boolean} True if of type .md, else false
 */
const isMarkdown = file => file.match(/.*\.(md)/gi)

/**
 * Returns the slug for the employee
 * @param {string}: post - name of directory
 * @return {string} slug path
 */
const getSlugs = name =>
  '/about/${' + name.substring(0, name.indexOf('.md')) + '}'

module.exports = { getFiles, getSlugs }

import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

/**
 * @Service This is a custom service built on top 
 * of angulars default 'Meta' and 'Title' Services for ease of use.
 * 
 * @Methods `setTitle(titleToAppend?: string)`
 * 
 * `setMetaTag(tagDefinition: MetaDefinition)`
 * 
 * `setMetaTags(tagDefinitions: Array<MetaDefinition>)`
 */
@Injectable({
  providedIn: 'root'
})
export class MetaAndTitleService {

  constructor(private meta: Meta, private title: Title) { }

  /**  
   * @note `defaultTitle` is set internally as a `const`
   * and it is the same as the one provided in the `<title> element` of index.html
   * 
   * @description If `titleToAppend` is provided, 
   * the `<title> element` is set to (`${defaultTitle} - ${titleToAppend}`),
   * 
   * else the `<title> element` is just `defaultTitle`.
   * 
   * @example 
   * 
   * const defaultTitle = 'ProgrammersWorld'
   * titleToAppend = 'HTML'
   * 
   * if (titleToAppend) {
   * <title> defaultTitle - titleToAppend </title>
   * }
   * 
   * else {
   * <title> defaultTitle </title>
   * }
   * 
   * @param titleToAppend Optional
   */

  setTitle(titleToAppend?: string) {
    const defaultTitle = 'ProgrammersWorld';
    if (titleToAppend) {
      this.title.setTitle(`${defaultTitle} - ${titleToAppend}`);
    }

    else {
      this.title.setTitle(defaultTitle);
    }
  }

  /**
   * @description sets a single `meta tag` based on the value of the `tagDefinition param`
   * @example 
   * tagDefinition = {name: 'author', content: 'WisestGurus'}
   * 
   * <!--This is now created based on the tagDefinition above-->
   * <meta name = 'author' content: 'WisestGurus'/>
   * @param tagDefinition 
   */
  setMetaTag(tagDefinition: MetaDefinition) {
    this.meta.updateTag(tagDefinition);
  }

  /**
   * @description sets multiple `meta tags` based on the value of the `tagDefinitions param`
   * @example 
   * tagDefinitions = [
   * {name: 'author', content: 'WisestGurus'}, 
   * {name:'keyword', content:'web,programming'}
   * ]
   * 
   * <!--This is now created based on the tagDefinitions above-->
   * <meta name = 'author' content: 'WisestGurus' />
   * <meta name = 'keyword' content: 'web,programming' />
   * @param tagDefinitions
   */
  setMetaTags(tagDefinitions: Array<MetaDefinition>) {
    tagDefinitions.forEach(tagDefinition => {
      this.meta.updateTag(tagDefinition);
    })
  }


}

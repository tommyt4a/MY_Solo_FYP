/**
 * Colors containing for light theme
 */
export default {
    // grey scale
    black: '#000000',
    white: '#ffffff',
    /**
     * A helper for making something see-thru. Use sparingly as many layers of transparency
     * can cause older Android devices to slow down due to the excessive compositing required
     * by their under-powered GPUs.
     */
    transparent: 'transparent',
    /**
     * The background color appears behind scrollable content
     */
    backgroundColor: '#F7F6F4',
    /**
     * Surface colors affect surfaces(background) of components, such as cards, sheets, and menus
     */
    surfaceColor: '#ffffff',
    /**
     * Use it for card border, InputText border etc.
     */
    borderColor: '#d9d9d9',
    /**
     * ========================= Primary color : (Brand color) =========================
     * primaryLightColor: Lighter shade of primary color, (can be used for hover effects)
     * primaryColor: To be used as background color for components which denotes primary action
     * primaryDarkColor: Darker shade of primary color, (can be used for border color or text color of components)
     */
    primaryLightColor: '#FF6666',
    primaryColor: '#FF3333',
    primaryDarkColor: '#FF0000',
    /**
     * Color which will replace primary color,
     * when component is in disabled state
     *
     * disabledDarkColor: to be used for border color & text color of disabled component
     */
    disabledColor: '#E3E6E8',
    disabledDarkColor: '#99A1A8',
    /**
     * To be used for heading text
     */
    headingTextColor: '#333d47',
    /**
     * To be used for sub-heading text
     */
    subHeadingTextColor: '#6C718B',
    /**
     * The default color of text in many components.
     * To be used for normal text like paragraph
     */
    bodyTextColor: '#A4A7C5',
    /**
     * To be used for hint/label text component
     */
    labelTextColor: '#6C718B',
    /**
     * Green shade for success messages and icons.
     */
    successColor: '#52c41a',
    /**
     * Red shade for error messages and icons
     */
    errorColor: '#ff190c',
    //===========================================================
    //================ Component Specific Style =================
    //===========================================================
    /**
     * ========================= AppBar =========================
     * appBar.statusBarColor: color for the status bar
     * appBar.barStyle: Sets the color of the status bar text.
     * appBar.backgroundColor: background color for appBar(toolbar)
     * appBar.tintColor: to be used for appBar title text, appBar icons color and for back button
     *
     * Note: If appBarColor color is dark, make appBarTintColor light
     * Note: If statusBarColor is light, set barStyle to `dark-content` else `light-content`
     */
    appBar: {
      statusBarColor: '#FF3333',
      barStyle: 'light-content',
      backgroundColor: '#FF3333',
      tintColor: '#ffffff',
    },
  };
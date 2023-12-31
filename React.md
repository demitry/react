#React

<!-- TOC -->

- [Section 3: React Basics & Working With Components](#section-3-react-basics--working-with-components)
    - [Module Introduction [36]](#module-introduction-36)
    - [What Are Components? And Why Is React All About Them? [37]](#what-are-components-and-why-is-react-all-about-them-37)
    - [React Code Is Written In A "Declarative Way"! [38]](#react-code-is-written-in-a-declarative-way-38)
    - [Creating a new React Project [39]](#creating-a-new-react-project-39)
    - [The Playing Project [40]](#the-playing-project-40)
    - [Analyzing a Standard React Project [41]](#analyzing-a-standard-react-project-41)
        - [index.js - Entry Point](#indexjs---entry-point)
        - [package.json](#packagejson)
        - [div root in index.html](#div-root-in-indexhtml)
        - [What should be rendered in this div "root"?](#what-should-be-rendered-in-this-div-root)
        - [What is App - Component ?](#what-is-app---component-)
        - [JSX - function App Returns HTML code in JS file](#jsx---function-app-returns-html-code-in-js-file)
        - [Inspect - Inserted root formatted version](#inspect---inserted-root-formatted-version)
    - [Introducing JSX [42]](#introducing-jsx-42)
        - [App.js this is NOT JS, it is developer-friendly code](#appjs-this-is-not-js-it-is-developer-friendly-code)
        - [Transformed code in static\js\bundle.js:](#transformed-code-in-static%5Cjs%5Cbundlejs)
    - [How React Works [43]](#how-react-works-43)
        - [Just Desired state imperative](#just-desired-state-imperative)
        - [How it was in regular JS](#how-it-was-in-regular-js)
    - [Coding Exercise 3: Exercise: Working with JSX Code [43]](#coding-exercise-3-exercise-working-with-jsx-code-43)
    - [Building a First Custom Component [44]](#building-a-first-custom-component-44)
    - [Coding Exercise 4: Exercise: Building a First Component [44]](#coding-exercise-4-exercise-building-a-first-component-44)
    - [Writing More Complex JSX Code [45]](#writing-more-complex-jsx-code-45)
        - [Should return only 1 root element so wrap in 1 div](#should-return-only-1-root-element-so-wrap-in-1-div)
        - [Fix](#fix)
    - [Adding Basic CSS Styling [46]](#adding-basic-css-styling-46)
    - [Outputting Dynamic Data & Working with Expressions in JSX [47]](#outputting-dynamic-data--working-with-expressions-in-jsx-47)
    - [Passing Data via "props" [48]](#passing-data-via-props-48)
    - [Coding Exercise 5: Exercise: Passing Data via "props" [48]](#coding-exercise-5-exercise-passing-data-via-props-48)
    - [Alternative Ways of Passing & Receiving / Handling "props" [49]](#alternative-ways-of-passing--receiving--handling-props-49)
    - [Adding "normal" JavaScript Logic to Components [50]](#adding-normal-javascript-logic-to-components-50)
    - [Splitting Components Into Multiple Components [51]](#splitting-components-into-multiple-components-51)
    - [Assignment 1: Time to Practice: React & Component Basics [51]](#assignment-1-time-to-practice-react--component-basics-51)
    - [The Concept of "Composition" "children props" [52]](#the-concept-of-composition-children-props-52)
    - [Coding Exercise 6: Exercise: Component Composition [52]](#coding-exercise-6-exercise-component-composition-52)
    - [A First Summary [53]](#a-first-summary-53)
    - [A Closer Look At JSX [54]](#a-closer-look-at-jsx-54)
    - [Organizing Component Files [55]](#organizing-component-files-55)
    - [An Alternative Function Syntax [56]](#an-alternative-function-syntax-56)
    - [Quiz 1: Learning Check: React Basics, Components, Props & JSX [56]](#quiz-1-learning-check-react-basics-components-props--jsx-56)
    - [Module Resources [57]](#module-resources-57)
    - [Module Introduction [66]](#module-introduction-66)
    - [Listening to Events & Working with Event Handlers [67]](#listening-to-events--working-with-event-handlers-67)
    - [Coding Exercise 7: Exercise: Listening to Events [67]](#coding-exercise-7-exercise-listening-to-events-67)
    - [How Component Functions Are Executed [68]](#how-component-functions-are-executed-68)
    - [Working with "State" [69]](#working-with-state-69)
    - [Coding Exercise 8: Exercise: Working with "State" [69]](#coding-exercise-8-exercise-working-with-state-69)
    - [A Closer Look at the "useState" Hook [70]](#a-closer-look-at-the-usestate-hook-70)
    - [State can be updated in many ways! [71]](#state-can-be-updated-in-many-ways-71)
    - [Adding Form Inputs [72]](#adding-form-inputs-72)
    - [Listening to User Input [73]](#listening-to-user-input-73)
    - [Working with Multiple States [74]](#working-with-multiple-states-74)
    - [Using One State Instead And What's Better [75]](#using-one-state-instead-and-whats-better-75)
    - [Updating State That Depends On The Previous State [76]](#updating-state-that-depends-on-the-previous-state-76)
    - [Coding Exercise 9: Exercise: Using State with Form Inputs [76]](#coding-exercise-9-exercise-using-state-with-form-inputs-76)
    - [Coding Exercise 10: Exercise: Updating State Based On Older State [76]](#coding-exercise-10-exercise-updating-state-based-on-older-state-76)
    - [Alternative: Creating A Shared Handler Function [77]](#alternative-creating-a-shared-handler-function-77)
    - [Handling Form Submission [78]](#handling-form-submission-78)
    - [Adding Two-Way Binding [79]](#adding-two-way-binding-79)
    - [Child-to-Parent Component Communication Bottom-up [80]](#child-to-parent-component-communication-bottom-up-80)
    - [Lifting The State Up [81]](#lifting-the-state-up-81)
    - [Assignment 2: Time to Practice: Working with Events & State [81]](#assignment-2-time-to-practice-working-with-events--state-81)
    - [Derived / Computed State [82]](#derived--computed-state-82)
    - [Controlled vs Uncontrolled Components & Stateless vs Stateful Components [83]](#controlled-vs-uncontrolled-components--stateless-vs-stateful-components-83)
    - [Quiz 2: Learning Check: Working with Events & State [83]](#quiz-2-learning-check-working-with-events--state-83)
    - [Module Resources [84]](#module-resources-84)
    - [Module Introduction [85]](#module-introduction-85)
    - [Rendering Lists of Data [86]](#rendering-lists-of-data-86)
    - [Coding Exercise 11: Exercise: Rendering Lists of Data [86]](#coding-exercise-11-exercise-rendering-lists-of-data-86)
    - [Using Stateful Lists [87]](#using-stateful-lists-87)
    - [Understanding "Keys" [88]](#understanding-keys-88)
    - [Assignment 3: Time to Practice: Working with Lists [88]](#assignment-3-time-to-practice-working-with-lists-88)
    - [Outputting Conditional Content [89]](#outputting-conditional-content-89)
    - [Coding Exercise 12: Exercise: Outputting Conditional Content [89]](#coding-exercise-12-exercise-outputting-conditional-content-89)
    - [Adding Conditional Return Statements [90]](#adding-conditional-return-statements-90)
    - [Assignment 4: Time to Practice: Conditional Content [90]](#assignment-4-time-to-practice-conditional-content-90)
    - [Demo App: Adding a Chart [91]](#demo-app-adding-a-chart-91)
    - [Adding Dynamic Styles [92]](#adding-dynamic-styles-92)
    - [Wrap Up & Next Steps [93]](#wrap-up--next-steps-93)
    - [Fixing a Small Bug [94]](#fixing-a-small-bug-94)
    - [Quiz 3: Learning Check: Outputting Lists & Conditional Content [94]](#quiz-3-learning-check-outputting-lists--conditional-content-94)
    - [Module Resources [95]](#module-resources-95)
    - [Module Introduction [96]](#module-introduction-96)
    - [Setting Dynamic Inline Styles [97]](#setting-dynamic-inline-styles-97)
    - [Coding Exercise 13: Exercise: Dynamic Styles [97]](#coding-exercise-13-exercise-dynamic-styles-97)
    - [Setting CSS Classes Dynamically [98]](#setting-css-classes-dynamically-98)
    - [Coding Exercise 14: Exercise: Dynamic CSS Classes [98]](#coding-exercise-14-exercise-dynamic-css-classes-98)
    - [Introducing Styled Components [99]](#introducing-styled-components-99)
    - [Styled Components & Dynamic Props [100]](#styled-components--dynamic-props-100)
    - [Styled Components & Media Queries [101]](#styled-components--media-queries-101)
    - [Using CSS Modules [102]](#using-css-modules-102)
    - [Dynamic Styles with CSS Modules [103]](#dynamic-styles-with-css-modules-103)
    - [Module Resources [104]](#module-resources-104)
    - [Module Introduction [105]](#module-introduction-105)
    - [Understanding React Error Messages [106]](#understanding-react-error-messages-106)
    - [Coding Exercise 15: Exercise: Fix Errors [106]](#coding-exercise-15-exercise-fix-errors-106)
    - [Analyzing Code Flow & Warnings [107]](#analyzing-code-flow--warnings-107)
    - [Working with Breakpoints [108]](#working-with-breakpoints-108)
    - [Using the React DevTools [109]](#using-the-react-devtools-109)
    - [Module Resources [110]](#module-resources-110)
    - [Module Introduction [111]](#module-introduction-111)
    - [The First Practice Project & Your Tasks [112]](#the-first-practice-project--your-tasks-112)
    - [Exercise Hints [113]](#exercise-hints-113)
    - [Splitting the App Into Components [114]](#splitting-the-app-into-components-114)
    - [Handling Events [115]](#handling-events-115)
    - [Managing State [116]](#managing-state-116)
    - [Lifting the State Up [117]](#lifting-the-state-up-117)
    - [Outputting Results Conditionally [118]](#outputting-results-conditionally-118)
    - [Adding CSS Modules [119]](#adding-css-modules-119)
    - [Fixing a Small Bug [120]](#fixing-a-small-bug-120)
    - [Introducing the Second Project [121]](#introducing-the-second-project-121)
    - [Exercise Hints [122]](#exercise-hints-122)
    - [Adding a "User" Component [123]](#adding-a-user-component-123)
    - [Adding a re-usable "Card" Component [124]](#adding-a-re-usable-card-component-124)
    - [Adding a re-usable "Button" Component [125]](#adding-a-re-usable-button-component-125)
    - [Managing the User Input State [126]](#managing-the-user-input-state-126)
    - [Adding Validation & Resetting Logic [127]](#adding-validation--resetting-logic-127)
    - [Adding a Users List Component [128]](#adding-a-users-list-component-128)
    - [Managing a List Of Users via State [129]](#managing-a-list-of-users-via-state-129)
    - [Adding The "ErrorModal" Component [130]](#adding-the-errormodal-component-130)
    - [Managing the Error State [131]](#managing-the-error-state-131)
    - [Module Resources [132]](#module-resources-132)
    - [Module Introduction [133]](#module-introduction-133)
    - [JSX Limitations & Workarounds [134]](#jsx-limitations--workarounds-134)
    - [Creating a Wrapper Component [135]](#creating-a-wrapper-component-135)
    - [React Fragments [136]](#react-fragments-136)
    - [Introducing React Portals [137]](#introducing-react-portals-137)
    - [Working with Portals [138]](#working-with-portals-138)
    - [Working with "ref"s [139]](#working-with-refs-139)
    - [Controlled vs Uncontrolled Components [140]](#controlled-vs-uncontrolled-components-140)
    - [Module Resources [141]](#module-resources-141)
    - [Module Introduction [142]](#module-introduction-142)
    - [What are "Side Effects" & Introducing useEffect [143]](#what-are-side-effects--introducing-useeffect-143)
    - [Using the useEffect Hook [144]](#using-the-useeffect-hook-144)
    - [useEffect & Dependencies [145]](#useeffect--dependencies-145)
    - [What to add & Not to add as Dependencies [146]](#what-to-add--not-to-add-as-dependencies-146)
    - [Using the useEffect Cleanup Function [147]](#using-the-useeffect-cleanup-function-147)
    - [useEffect Summary [148]](#useeffect-summary-148)
    - [Introducing useReducer & Reducers In General [149]](#introducing-usereducer--reducers-in-general-149)
    - [Using the useReducer Hook [150]](#using-the-usereducer-hook-150)
    - [useReducer & useEffect [151]](#usereducer--useeffect-151)
    - [Adding Nested Properties As Dependencies To useEffect [152]](#adding-nested-properties-as-dependencies-to-useeffect-152)
    - [useReducer vs useState for State Management [153]](#usereducer-vs-usestate-for-state-management-153)
    - [Introducing React Context Context API [154]](#introducing-react-context-context-api-154)
    - [Using the React Context API [155]](#using-the-react-context-api-155)
    - [Tapping Into Context with the useContext Hook [156]](#tapping-into-context-with-the-usecontext-hook-156)
    - [Making Context Dynamic [157]](#making-context-dynamic-157)
    - [Building & Using a Custom Context Provider Component [158]](#building--using-a-custom-context-provider-component-158)
    - [React Context Limitations [159]](#react-context-limitations-159)
    - [Learning the "Rules of Hooks" [160]](#learning-the-rules-of-hooks-160)
    - [Refactoring an Input Component [161]](#refactoring-an-input-component-161)
    - [Diving into "Forward Refs" [162]](#diving-into-forward-refs-162)
    - [Module Resources [163]](#module-resources-163)
    - [Module Introduction [164]](#module-introduction-164)
    - [ing Setup [165]](#ing-setup-165)
    - [Adding a "Header" Component [166]](#adding-a-header-component-166)
    - [Adding the "Cart" Button Component [167]](#adding-the-cart-button-component-167)
    - [Adding a "Meals" Component [168]](#adding-a-meals-component-168)
    - [Adding Individual Meal Items & Dising Them [169]](#adding-individual-meal-items--dising-them-169)
    - [Adding a Form [170]](#adding-a-form-170)
    - [Fixing Form Input IDs [171]](#fixing-form-input-ids-171)
    - [Working on the "Shopping Cart" Component [172]](#working-on-the-shopping-cart-component-172)
    - [Adding a Modal via a React Portal [173]](#adding-a-modal-via-a-react-portal-173)
    - [Managing Cart & Modal State [174]](#managing-cart--modal-state-174)
    - [Adding a Cart Context [175]](#adding-a-cart-context-175)
    - [Using the Context [176]](#using-the-context-176)
    - [Adding a Cart Reducer [177]](#adding-a-cart-reducer-177)
    - [Working with Refs & Forward Refs [178]](#working-with-refs--forward-refs-178)
    - [Outputting Cart Items [179]](#outputting-cart-items-179)
    - [Working on a More Complex Reducer Logic [180]](#working-on-a-more-complex-reducer-logic-180)
    - [Making Items Removable [181]](#making-items-removable-181)
    - [Using the useEffect Hook [182]](#using-the-useeffect-hook-182)
    - [Module Resources [183]](#module-resources-183)
    - [Module Introduction [184]](#module-introduction-184)
    - [How React Really Works [185]](#how-react-really-works-185)
    - [Component Updates In Action [186]](#component-updates-in-action-186)
    - [A Closer Look At Child Component Re-Evaluation [187]](#a-closer-look-at-child-component-re-evaluation-187)
    - [Preventing Unnecessary Re-Evaluations with React.memo [188]](#preventing-unnecessary-re-evaluations-with-reactmemo-188)
    - [Preventing Function Re-Creation with useCallback [189]](#preventing-function-re-creation-with-usecallback-189)
    - [useCallback and its Dependencies [190]](#usecallback-and-its-dependencies-190)
    - [A First Summary [191]](#a-first-summary-191)
    - [A Closer Look At State & Components [192]](#a-closer-look-at-state--components-192)
    - [Understanding State Scheduling & Batching [193]](#understanding-state-scheduling--batching-193)
    - [Optimizing with useMemo [194]](#optimizing-with-usememo-194)
    - [Module Resources [195]](#module-resources-195)
    - [Module Introduction [196]](#module-introduction-196)
    - [What & Why [197]](#what--why-197)
    - [Adding a First Class-based Component [198]](#adding-a-first-class-based-component-198)
    - [Working with State & Events [199]](#working-with-state--events-199)
    - [The Component Lifecycle Class-based Components Only! [200]](#the-component-lifecycle-class-based-components-only-200)
    - [Lifecycle Methods In Action [201]](#lifecycle-methods-in-action-201)
    - [Class-based Components & Context [202]](#class-based-components--context-202)
    - [Class-based vs Functional Components: A Summary [203]](#class-based-vs-functional-components-a-summary-203)
    - [Introducing Error Boundaries [204]](#introducing-error-boundaries-204)
    - [Module Resources [205]](#module-resources-205)
    - [Module Introduction [206]](#module-introduction-206)
    - [How To Not Connect To A Database [207]](#how-to-not-connect-to-a-database-207)
    - [Using the Star Wars API [208]](#using-the-star-wars-api-208)
    - [Our ing App & Backend [209]](#our-ing-app--backend-209)
    - [Sending a GET Request [210]](#sending-a-get-request-210)
    - [Using async / await [211]](#using-async--await-211)
    - [Handling Loading & Data States [212]](#handling-loading--data-states-212)
    - [Handling Http Errors [213]](#handling-http-errors-213)
    - [Using useEffect For Requests [214]](#using-useeffect-for-requests-214)
    - [Preparing The Project For The Next Steps [215]](#preparing-the-project-for-the-next-steps-215)
    - [Sending a POST Request [216]](#sending-a-post-request-216)
    - [Wrap Up [217]](#wrap-up-217)
    - [Module Resources [218]](#module-resources-218)
    - [Module Introduction [219]](#module-introduction-219)
    - [What are "Custom Hooks"? [220]](#what-are-custom-hooks-220)
    - [Creating a Custom React Hook Function [221]](#creating-a-custom-react-hook-function-221)
    - [Using Custom Hooks [222]](#using-custom-hooks-222)
    - [Configuring Custom Hooks [223]](#configuring-custom-hooks-223)
    - [Onwards To A More Realistic Example [224]](#onwards-to-a-more-realistic-example-224)
    - [Building a Custom Http Hook [225]](#building-a-custom-http-hook-225)
    - [Using the Custom Http Hook [226]](#using-the-custom-http-hook-226)
    - [Adjusting the Custom Hook Logic [227]](#adjusting-the-custom-hook-logic-227)
    - [Using The Custom Hook In More Components [228]](#using-the-custom-hook-in-more-components-228)
    - [Module Resources [229]](#module-resources-229)
    - [Module Introduction [230]](#module-introduction-230)
    - [Our ing Setup [231]](#our-ing-setup-231)
    - [What's So Complex About Forms? [232]](#whats-so-complex-about-forms-232)
    - [Dealing With Form Submission & Getting User Input Values [233]](#dealing-with-form-submission--getting-user-input-values-233)
    - [Adding Basic Validation [234]](#adding-basic-validation-234)
    - [Providing Validation Feedback [235]](#providing-validation-feedback-235)
    - [Handling the "was touched" State [236]](#handling-the-was-touched-state-236)
    - [React To Lost Focus [237]](#react-to-lost-focus-237)
    - [Refactoring & Deriving States [238]](#refactoring--deriving-states-238)
    - [Managing The Overall Form Validity [239]](#managing-the-overall-form-validity-239)
    - [Assignment 5: Time to Practice: Forms [239]](#assignment-5-time-to-practice-forms-239)
    - [Adding A Custom Input Hook [240]](#adding-a-custom-input-hook-240)
    - [Re-Using The Custom Hook [241]](#re-using-the-custom-hook-241)
    - [A Challenge For You! [242]](#a-challenge-for-you-242)
    - [Applying Our Hook & Knowledge To A New Form [243]](#applying-our-hook--knowledge-to-a-new-form-243)
    - [Summary [244]](#summary-244)
    - [Bonus: Using useReducer [245]](#bonus-using-usereducer-245)
    - [Module Resources [246]](#module-resources-246)
    - [Module Introduction [247]](#module-introduction-247)
    - [Moving "Meals" Data To The Backend [248]](#moving-meals-data-to-the-backend-248)
    - [Fetching Meals via Http [249]](#fetching-meals-via-http-249)
    - [Handling the Loading State [250]](#handling-the-loading-state-250)
    - [Handling Errors [251]](#handling-errors-251)
    - [Adding A Checkout Form [252]](#adding-a-checkout-form-252)
    - [Reading Form Values [253]](#reading-form-values-253)
    - [Adding Form Validation [254]](#adding-form-validation-254)
    - [Submitting & Sending Cart Data [255]](#submitting--sending-cart-data-255)
    - [Adding Better User Feedback [256]](#adding-better-user-feedback-256)
    - [Summary [257]](#summary-257)
    - [Module Resources [258]](#module-resources-258)
    - [Module Introduction [259]](#module-introduction-259)
    - [Another Look At State In React Apps [260]](#another-look-at-state-in-react-apps-260)
    - [Redux vs React Context [261]](#redux-vs-react-context-261)
    - [How Redux Works [262]](#how-redux-works-262)
    - [MUST READ: Redux createStore is not deprecated [263]](#must-read-redux-createstore-is-not-deprecated-263)
    - [Exploring The Core Redux Concepts [264]](#exploring-the-core-redux-concepts-264)
    - [More Redux Basics [265]](#more-redux-basics-265)
    - [Preparing a new Project [266]](#preparing-a-new-project-266)
    - [Creating a Redux Store for React [267]](#creating-a-redux-store-for-react-267)
    - [Providing the Store [268]](#providing-the-store-268)
    - [Using Redux Data in React Components [269]](#using-redux-data-in-react-components-269)
    - [Dispatching Actions From Inside Components [270]](#dispatching-actions-from-inside-components-270)
    - [Redux with Class-based Components [271]](#redux-with-class-based-components-271)
    - [Attaching Payloads to Actions [272]](#attaching-payloads-to-actions-272)
    - [Working with Multiple State Properties [273]](#working-with-multiple-state-properties-273)
    - [How To Work With Redux State Correctly [274]](#how-to-work-with-redux-state-correctly-274)
    - [Redux Challenges & Introducing Redux Toolkit [275]](#redux-challenges--introducing-redux-toolkit-275)
    - [Adding State Slices [276]](#adding-state-slices-276)
    - [Connecting Redux Toolkit State [277]](#connecting-redux-toolkit-state-277)
    - [Migrating Everything To Redux Toolkit [278]](#migrating-everything-to-redux-toolkit-278)
    - [Working with Multiple Slices [279]](#working-with-multiple-slices-279)
    - [Reading & Dispatching From A New Slice [280]](#reading--dispatching-from-a-new-slice-280)
    - [Splitting Our Code [281]](#splitting-our-code-281)
    - [Summary [282]](#summary-282)
    - [Module Resources [283]](#module-resources-283)
    - [Module Introduction [284]](#module-introduction-284)
    - [Redux & Side Effects and Asynchronous Code [285]](#redux--side-effects-and-asynchronous-code-285)
    - [Refresher / Practice: Part 1/2 [286]](#refresher--practice-part-12-286)
    - [Refresher / Practice: Part 2/2 [287]](#refresher--practice-part-22-287)
    - [Redux & Async Code [288]](#redux--async-code-288)
    - [Frontend Code vs Backend Code [289]](#frontend-code-vs-backend-code-289)
    - [Where To Put Our Logic [290]](#where-to-put-our-logic-290)
    - [Using useEffect with Redux [291]](#using-useeffect-with-redux-291)
    - [A Problem with useEffect [292]](#a-problem-with-useeffect-292)
    - [Handling Http States & Feedback with Redux [293]](#handling-http-states--feedback-with-redux-293)
    - [Using an Action Creator Thunk [294]](#using-an-action-creator-thunk-294)
    - [Getting ed with Fetching Data [295]](#getting-ed-with-fetching-data-295)
    - [Finalizing the Fetching Logic [296]](#finalizing-the-fetching-logic-296)
    - [Exploring the Redux DevTools [297]](#exploring-the-redux-devtools-297)
    - [Summary [298]](#summary-298)
    - [Module Resources [299]](#module-resources-299)
    - [Module Introduction [300]](#module-introduction-300)
    - [Routing: Multiple Pages in Single-Page Applications [301]](#routing-multiple-pages-in-single-page-applications-301)
    - [Project Setup & Installing React Router [302]](#project-setup--installing-react-router-302)
    - [Defining Routes [303]](#defining-routes-303)
    - [Adding a Second Route [304]](#adding-a-second-route-304)
    - [Exploring an Alternative Way of Defining Routes [305]](#exploring-an-alternative-way-of-defining-routes-305)
    - [Navigating between Pages with Links [306]](#navigating-between-pages-with-links-306)
    - [Layouts & Nested Routes [307]](#layouts--nested-routes-307)
    - [Showing Error Pages with errorElement [308]](#showing-error-pages-with-errorelement-308)
    - [Working with Navigation Links NavLink [309]](#working-with-navigation-links-navlink-309)
    - [Navigating Programmatically [310]](#navigating-programmatically-310)
    - [Defining & Using Dynamic Routes [311]](#defining--using-dynamic-routes-311)
    - [Adding Links for Dynamic Routes [312]](#adding-links-for-dynamic-routes-312)
    - [Understanding Relative & Absolute Paths [313]](#understanding-relative--absolute-paths-313)
    - [Working with Index Routes [314]](#working-with-index-routes-314)
    - [Onwards to a new Project Setup [315]](#onwards-to-a-new-project-setup-315)
    - [Time to Practice: Problem [316]](#time-to-practice-problem-316)
    - [Time to Practice: Solution [317]](#time-to-practice-solution-317)
    - [Data Fetching with a loader [318]](#data-fetching-with-a-loader-318)
    - [Using Data From A Loader In The Route Component [319]](#using-data-from-a-loader-in-the-route-component-319)
    - [More loader Data Usage [320]](#more-loader-data-usage-320)
    - [Where Should loader Code Be Stored? [321]](#where-should-loader-code-be-stored-321)
    - [When Are loader Functions Executed? [322]](#when-are-loader-functions-executed-322)
    - [Reflecting The Current Navigation State in the UI [323]](#reflecting-the-current-navigation-state-in-the-ui-323)
    - [Returning Responses in loaders [324]](#returning-responses-in-loaders-324)
    - [Which Kind Of Code Goes Into loaders? [325]](#which-kind-of-code-goes-into-loaders-325)
    - [Error Handling with Custom Errors [326]](#error-handling-with-custom-errors-326)
    - [Extracting Error Data & Throwing Responses [327]](#extracting-error-data--throwing-responses-327)
    - [The json Utility Function [328]](#the-json-utility-function-328)
    - [Dynamic Routes & loaders [329]](#dynamic-routes--loaders-329)
    - [The useRouteLoaderData Hook & Accessing Data From Other Routes [330]](#the-userouteloaderdata-hook--accessing-data-from-other-routes-330)
    - [Planning Data Submission [331]](#planning-data-submission-331)
    - [Working with action Functions [332]](#working-with-action-functions-332)
    - [Submitting Data Programmatically [333]](#submitting-data-programmatically-333)
    - [Updating the UI State Based on the Submission Status [334]](#updating-the-ui-state-based-on-the-submission-status-334)
    - [Validating User Input & Outputting Validation Errors [335]](#validating-user-input--outputting-validation-errors-335)
    - [Reusing Actions via Request Methods [336]](#reusing-actions-via-request-methods-336)
    - [Behind-the-Scenes Work with useFetcher [337]](#behind-the-scenes-work-with-usefetcher-337)
    - [Deferring Data Fetching with defer [338]](#deferring-data-fetching-with-defer-338)
    - [Controlling Which Data Should Be Deferred [339]](#controlling-which-data-should-be-deferred-339)
    - [Module Summary [340]](#module-summary-340)
    - [Upgrading from React Router v5 [341]](#upgrading-from-react-router-v5-341)
    - [Module Resources [342]](#module-resources-342)
    - [Old Lectures [343]](#old-lectures-343)
    - [Module Introduction [344]](#module-introduction-344)
    - [How Authentication Works [345]](#how-authentication-works-345)
    - [Project Setup & Route Setup [346]](#project-setup--route-setup-346)
    - [Working with Query Parameters [347]](#working-with-query-parameters-347)
    - [Implementing the Auth Action [348]](#implementing-the-auth-action-348)
    - [Validating User Input & Outputting Validation Errors [349]](#validating-user-input--outputting-validation-errors-349)
    - [Adding User Login [350]](#adding-user-login-350)
    - [Attaching Auth Tokens to Outgoing Requests [351]](#attaching-auth-tokens-to-outgoing-requests-351)
    - [Adding User Logout [352]](#adding-user-logout-352)
    - [Updating the UI Based on Auth Status [353]](#updating-the-ui-based-on-auth-status-353)
    - [Important: loaders must return null or any other value [354]](#important-loaders-must-return-null-or-any-other-value-354)
    - [Adding Route Protection [355]](#adding-route-protection-355)
    - [Adding Automatic Logout [356]](#adding-automatic-logout-356)
    - [Managing the Token Expiration [357]](#managing-the-token-expiration-357)
    - [Module Resources [358]](#module-resources-358)
    - [Module Introduction [359]](#module-introduction-359)
    - [Deployment Steps [360]](#deployment-steps-360)
    - [Understanding Lazy Loading [361]](#understanding-lazy-loading-361)
    - [Adding Lazy Loading [362]](#adding-lazy-loading-362)
    - [Building the Code For Production [363]](#building-the-code-for-production-363)
    - [Deployment Example [364]](#deployment-example-364)
    - [Server-side Routing & Required Configuration [365]](#server-side-routing--required-configuration-365)
    - [Module Resources [366]](#module-resources-366)
    - [Module Introduction [402]](#module-introduction-402)
    - [Preparing the Demo Project [403]](#preparing-the-demo-project-403)
    - [Using CSS Transitions [404]](#using-css-transitions-404)
    - [Using CSS Animations [405]](#using-css-animations-405)
    - [CSS Transition & Animations Limitations [406]](#css-transition--animations-limitations-406)
    - [Using ReactTransitionGroup [407]](#using-reacttransitiongroup-407)
    - [Using the Transition Component [408]](#using-the-transition-component-408)
    - [Wrapping the Transition Component [409]](#wrapping-the-transition-component-409)
    - [Animation Timings [410]](#animation-timings-410)
    - [Transition Events [411]](#transition-events-411)
    - [The CSSTransition Component [412]](#the-csstransition-component-412)
    - [Customizing CSS Classnames [413]](#customizing-css-classnames-413)
    - [Animating Lists [414]](#animating-lists-414)
    - [Alternative Animation Packages [415]](#alternative-animation-packages-415)
    - [Wrap Up [416]](#wrap-up-416)
    - [Module Resources [417]](#module-resources-417)
    - [Module Introduction [418]](#module-introduction-418)
    - [React 18 & This Section [419]](#react-18--this-section-419)
    - [ing Project & Why You Would Replace Redux [420]](#ing-project--why-you-would-replace-redux-420)
    - [Alternative: Using the Context API [421]](#alternative-using-the-context-api-421)
    - [Toggling Favorites with the Context API [422]](#toggling-favorites-with-the-context-api-422)
    - [Context API Summary and why NOT to use it instead of Redux [423]](#context-api-summary-and-why-not-to-use-it-instead-of-redux-423)
    - [Getting ed with a Custom Hook as a Store [424]](#getting-ed-with-a-custom-hook-as-a-store-424)
    - [Finishing the Store Hook [425]](#finishing-the-store-hook-425)
    - [Creating a Concrete Store [426]](#creating-a-concrete-store-426)
    - [Using the Custom Store [427]](#using-the-custom-store-427)
    - [Custom Hook Store Summary [428]](#custom-hook-store-summary-428)
    - [Optimizing the Custom Hook Store [429]](#optimizing-the-custom-hook-store-429)
    - [Bonus: Managing Multiple State Slices with the Custom Store Hook [430]](#bonus-managing-multiple-state-slices-with-the-custom-store-hook-430)
    - [Wrap Up [431]](#wrap-up-431)
    - [Module Resources [432]](#module-resources-432)
    - [Module Introduction [433]](#module-introduction-433)
    - [What & Why? [434]](#what--why-434)
    - [Understanding Different Kinds Of Tests [435]](#understanding-different-kinds-of-tests-435)
    - [What To Test & How To Test [436]](#what-to-test--how-to-test-436)
    - [Understanding the Technical Setup & Involved Tools [437]](#understanding-the-technical-setup--involved-tools-437)
    - [Running a First Test [438]](#running-a-first-test-438)
    - [Writing Our First Test [439]](#writing-our-first-test-439)
    - [Grouping Tests Together With Test Suites [440]](#grouping-tests-together-with-test-suites-440)
    - [Testing User Interaction & State [441]](#testing-user-interaction--state-441)
    - [Testing Connected Components [442]](#testing-connected-components-442)
    - [Testing Asynchronous Code [443]](#testing-asynchronous-code-443)
    - [Working With Mocks [444]](#working-with-mocks-444)
    - [Summary & Further Resources [445]](#summary--further-resources-445)
    - [Module Resources [446]](#module-resources-446)
    - [Module Introduction [447]](#module-introduction-447)
    - [What & Why? [448]](#what--why-448)
    - [Installing & Using TypeScript [449]](#installing--using-typescript-449)
    - [Exploring the Base Types [450]](#exploring-the-base-types-450)
    - [Working with Array & Object Types [451]](#working-with-array--object-types-451)
    - [Understanding Type Inference [452]](#understanding-type-inference-452)
    - [Using Union Types [453]](#using-union-types-453)
    - [Understanding Type Aliases [454]](#understanding-type-aliases-454)
    - [Functions & Function Types [455]](#functions--function-types-455)
    - [Diving Into Generics [456]](#diving-into-generics-456)
    - [A Closer Look At Generics [457]](#a-closer-look-at-generics-457)
    - [Creating a React + TypeScript Project [458]](#creating-a-react--typescript-project-458)
    - [Working with Components & TypeScript [459]](#working-with-components--typescript-459)
    - [Working with Props & TypeScript [460]](#working-with-props--typescript-460)
    - [Adding a Data Model [461]](#adding-a-data-model-461)
    - [Time to Practice: Exercise Time! [462]](#time-to-practice-exercise-time-462)
    - [Form Submissions In TypeScript Projects [463]](#form-submissions-in-typescript-projects-463)
    - [Working with refs & useRef [464]](#working-with-refs--useref-464)
    - [Working with "Function Props" [465]](#working-with-function-props-465)
    - [Managing State & TypeScript [466]](#managing-state--typescript-466)
    - [Adding Styling [467]](#adding-styling-467)
    - [Time to Practice: Removing a Todo [468]](#time-to-practice-removing-a-todo-468)
    - [The Context API & TypeScript [469]](#the-context-api--typescript-469)
    - [Summary [470]](#summary-470)
    - [Bonus: Exploring tsconfig.json [471]](#bonus-exploring-tsconfigjson-471)
    - [Module Resources [472]](#module-resources-472)
    - [Module Introduction [473]](#module-introduction-473)
    - [What Are React Hooks? [474]](#what-are-react-hooks-474)
    - [The ing Project [475]](#the-ing-project-475)
    - [React 18 & This Section [476]](#react-18--this-section-476)
    - [Getting ed with useState [477]](#getting-ed-with-usestate-477)
    - [More on useState & State Updating [478]](#more-on-usestate--state-updating-478)
    - [Array Destructuring [479]](#array-destructuring-479)
    - [Multiple States [480]](#multiple-states-480)
    - [Rules of Hooks [481]](#rules-of-hooks-481)
    - [Passing State Data Across Components [482]](#passing-state-data-across-components-482)
    - [Assignment 6: Time to Practice: Hooks Basics [482]](#assignment-6-time-to-practice-hooks-basics-482)
    - [Sending Http Requests [483]](#sending-http-requests-483)
    - [useEffect & Loading Data [484]](#useeffect--loading-data-484)
    - [Understanding useEffect Dependencies [485]](#understanding-useeffect-dependencies-485)
    - [More on useEffect [486]](#more-on-useeffect-486)
    - [What's useCallback? [487]](#whats-usecallback-487)
    - [Working with Refs & useRef [488]](#working-with-refs--useref-488)
    - [Cleaning Up with useEffect [489]](#cleaning-up-with-useeffect-489)
    - [Deleting Ingredients [490]](#deleting-ingredients-490)
    - [Loading Errors & State Batching [491]](#loading-errors--state-batching-491)
    - [More on State Batching & State Updates [492]](#more-on-state-batching--state-updates-492)
    - [Understanding useReducer [493]](#understanding-usereducer-493)
    - [Using useReducer for the Http State [494]](#using-usereducer-for-the-http-state-494)
    - [Working with useContext [495]](#working-with-usecontext-495)
    - [Performance Optimizations with useMemo [496]](#performance-optimizations-with-usememo-496)
    - [Getting ed with Custom Hooks [497]](#getting-ed-with-custom-hooks-497)
    - [Sharing Data Between Custom Hooks & Components [498]](#sharing-data-between-custom-hooks--components-498)
    - [Using the Custom Hook [499]](#using-the-custom-hook-499)
    - [Wrap Up [500]](#wrap-up-500)
    - [Module Resources [501]](#module-resources-501)
    - [Module Introduction [502]](#module-introduction-502)
    - [What Is React & Why Would You Use It? [503]](#what-is-react--why-would-you-use-it-503)
    - [React Projects - Requirements [504]](#react-projects---requirements-504)
    - [Creating React Projects [505]](#creating-react-projects-505)
    - [Out ing Project [506]](#out-ing-project-506)
    - [Understanding How React Works [507]](#understanding-how-react-works-507)
    - [Building A First Custom Component [508]](#building-a-first-custom-component-508)
    - [Outputting Dynamic Values [509]](#outputting-dynamic-values-509)
    - [Reusing Components [510]](#reusing-components-510)
    - [Passing Data to Components with Props [511]](#passing-data-to-components-with-props-511)
    - [CSS Styling & CSS Modules [512]](#css-styling--css-modules-512)
    - [Exercise & Another Component [513]](#exercise--another-component-513)
    - [Preparing the App For State Management [514]](#preparing-the-app-for-state-management-514)
    - [Adding Event Listeners [515]](#adding-event-listeners-515)
    - [Working with State [516]](#working-with-state-516)
    - [Lifting State Up [517]](#lifting-state-up-517)
    - [The Special "children" Prop [518]](#the-special-children-prop-518)
    - [State & Conditional Content [519]](#state--conditional-content-519)
    - [Adding a Shared Header & More State Management [520]](#adding-a-shared-header--more-state-management-520)
    - [Adding Form Buttons [521]](#adding-form-buttons-521)
    - [Handling Form Submission [522]](#handling-form-submission-522)
    - [Updating State Based On Previous State [523]](#updating-state-based-on-previous-state-523)
    - [Outputting List Data [524]](#outputting-list-data-524)
    - [Adding a Backend to the React SPA [525]](#adding-a-backend-to-the-react-spa-525)
    - [Sending a POST HTTP Request [526]](#sending-a-post-http-request-526)
    - [Handling Side Effects with useEffect [527]](#handling-side-effects-with-useeffect-527)
    - [Handle Loading State [528]](#handle-loading-state-528)
    - [Understanding & Adding Routing [529]](#understanding--adding-routing-529)
    - [Adding Routes [530]](#adding-routes-530)
    - [Working with Layout Routes [531]](#working-with-layout-routes-531)
    - [Refactoring Route Components & More Nesting [532]](#refactoring-route-components--more-nesting-532)
    - [Linking & Navigating [533]](#linking--navigating-533)
    - [Data Fetching via loaders [534]](#data-fetching-via-loaders-534)
    - [Submitting Data with actions [535]](#submitting-data-with-actions-535)
    - [Dynamic Routes [536]](#dynamic-routes-536)
    - [Module Summary [537]](#module-summary-537)
    - [Module Resources [538]](#module-resources-538)
    - [What Now? Next Steps You Could Take! [539]](#what-now-next-steps-you-could-take-539)
    - [Explore The React Ecosystem! [540]](#explore-the-react-ecosystem-540)
    - [Finishing Thoughts [541]](#finishing-thoughts-541)
    - [Course Roundup [542]](#course-roundup-542)
    - [Bonus! [543]](#bonus-543)
    - [Old Course Content Download [544]](#old-course-content-download-544)

<!-- /TOC -->

## Section 3: React Basics & Working With Components

### Module Introduction [36]

- Component Driven Development, React is about **Components**
- React Core Syntax, JSX
- Working with Data
- Practice: Expense Tracker

### What Are Components? And Why Is React All About Them? [37]

- Simplifies UI building
- Error-Prone
- Identify Components 
  - same items, reusable UI blocks,
  - split them into components
  - and compose them into UI
  - Separation of Concerns
  - 1 component = 1 task and purpose

### React Code Is Written In A "Declarative Way"! [38]

- CSS is important, **but:**
- Mostly combining html + js

**Declarative approach**
- define desired target end state(s)
- React will do all of the rest under the hood

### Creating a new React Project [39]

react-complete-guide-code

https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code

```sh
git clone https://github.com/academind/react-complete-guide-code.git
```

### The Playing Project [40]

index.js - entry point, first exec file

this code will be transformed

imports, etc, the normal JS/HTML code will be injected during build

### Analyzing a Standard React Project [41]

```bash
npx create-react-app first-app
first-app
npm start
#  Local:            http://localhost:3000        
#  On Your Network:  http://<IPv4 Address.>:3000   
# it knows my IPv4 Address )))
```

#### index.js - Entry Point

```js
import React from 'react'; 
import ReactDOM from 'react-dom/client'; // from "react-dom": "^18.2.0", check package.json

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  // create entry point, main hook, all UI

// What should be rendered in div "root"? 
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
```

#### package.json

```json
{
  "name": "first-app",
// ...
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
}
```

#### div root in index.html

- The root is created,  Where to place this root?
  - public folder, index.html contains root
  - The React code will be injected there
  
```html
<!-- ... -->
<div id="root"></div>
<!-- ... -->
```

#### What should be rendered in this div "root"?

```js
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
```

#### What is App - Component ?

- App is a component
- export default App;
- it renders in place of that div
- App.js:

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

#### JSX - function App() Returns HTML code in JS file

- And this is JSX...

#### Inspect - Inserted root (formatted version)

```html
<div id="root">
    <div class="App">
        <header class="App-header"><img src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" class="App-logo"
                alt="logo">
            <p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org"
                target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
    </div>
</div>
```

### Introducing JSX [42]

- F12 observe React and React DOM library code 

- JSX works because of npm start process

#### App.js this is NOT JS, it is developer-friendly code
```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        ...
```

#### Transformed code in static\js\bundle.js:
```js
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "App",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("header", {
      className: "App-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: _logo_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
        className: "App-logo",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("code", {
          children: "src/App.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 16
        }, this), " and save to reload."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

```

### How React Works [43]

- React is responsible for rendering

#### Just Desired state (imperative)

```html
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
```

#### How it was in regular JS
```js
const para = document.createElement('p');
para.textContent = "This is also visible";
document.getElementById('root').append(para);
```

### Coding Exercise 3: Exercise: Working with JSX Code [43]

```js
import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Exercise done!</h1>
        </div>
    );
}
```

### Building a First Custom Component [44]

- components folder
- 1 file per 1 component
- Building component tree: root and leaves...
- Component is just a JS function

- lowercase = built-in elements
- Uppercase = our defined

ExpenseItem.js
```js
function ExpenseItem() {
    return <h2>Expense Item</h2>
}

export default ExpenseItem;
```
Use in App.js
```
import ExpenseItem  from './components/ExpenseItem'; 
...
        <ExpenseItem></ExpenseItem>
```

### Coding Exercise 4: Exercise: Building a First Component [44]

```js
import React from 'react';

export default function SomeComponent() {
  return "First exercise - done!"
}
```

```js
import React from 'react';
import ExerciseComponent from './ExerciseComponent'

export default function App() {
    return <ExerciseComponent></ExerciseComponent>;
}
```

### Writing More Complex JSX Code [45]

#### Should return only 1 root element so wrap in 1 div

```js
function ExpenseItem() {
    return <div>Hello</div> <div>Hello</div> 
    // Error!
}
```

#### Fix
```js
function ExpenseItem() {
    //return <div>Hello</div> <div>Hello</div> 
    //Error! Should return only 1 root element so wrap in 1 div
    return (<div>
        <div>March 28th 2023</div>
        <div>
            <h2>Car Insurance</h2>
            <div>$245.23</div>
        </div>
    </div>);
}

export default ExpenseItem;
```

### Adding Basic CSS Styling [46]

- import './ExpenseItem.css'
- We don't write class for divs, but **className**

```js
import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 28th 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$245.23</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
```

https://github.com/academind/react-complete-guide-code/blob/03-react-basics-working-with-components/extra-files/ExpenseItem.css

[] TODO: CSS?

### Outputting Dynamic Data & Working with Expressions in JSX [47]

- Our data is hardcoded for now
- How to reuse component?

```js
function ExpenseItem() {

    const expenseDate = new Date(2023, 2, 28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 245.23;
    
    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}
```

### Passing Data via "props" [48]

- Props are the "attributes" of your "custom HTML elements" (components)
- ExpenseItem(props) receive only 1 parameter - props
- Share data with component using props

```js
function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}
```

```js
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.57, date: new Date(2023, 2, 28) },
    { id: 'e2', title: 'Paper', amount: 123.12, date: new Date(2023, 3, 27) },
    { id: 'e3', title: 'New Wooden Desk', amount: 21.00, date: new Date(2023, 4, 28) },
    { id: 'e4', title: 'Meal', amount: 65.34, date: new Date(2023, 5, 22) }
  ];
```

```html
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

```

### Coding Exercise 5: Exercise: Passing Data via "props" [48]

```js
import React from 'react';
import './Product.css'

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
```

```css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
}

.product {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #373535;
    color: #e7e4e4;
    border-radius: 8px;
}

.product h2,
.product p {
    margin: 0.5rem 0;
}

.price {
    font-size: 0.75rem;
    color: #bab6b6;
}
```

```js
  const products = [
    { title:'Product 1', price: 10, description: 'First product' },
    { title:'Product 2', price: 20, description: 'Second product' }
  ];
```

```html
<Product title={products[0].title} price={products[0].price} description={products[0].description}></Product>
<Product title={products[1].title} price={products[1].price} description={products[1].description}></Product>
```

### Alternative Ways of Passing & Receiving / Handling "props" [49]

1. Alternative 1: Pass whole object

```html
<ExpenseItem expense={expenses[0]}></ExpenseItem>
```

```js
function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.expense.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </div>
    );
}
```

2. Alternative 2: Destructuring props object

```js
export default function Product({title, price, description}) {
    return (
        <article className="product">
            <h2>{title}</h2>
            <p className="price">${price}</p>
            <p>{description}</p>
        </article>
    );
}
```

### Adding "normal" JavaScript Logic to Components [50]

```js
function ExpenseItem(props) {
    const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
    const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expense.date.getFullYear();
    
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </div>
    );
}

```

### Splitting Components Into Multiple Components [51]

We pass data from a component to direct child components

Good practice to keep your component small, separate js, css

### Assignment 1: Time to Practice: React & Component Basics [51]
### The Concept of "Composition" ("children props") [52]
### Coding Exercise 6: Exercise: Component Composition [52]
### A First Summary [53]
### A Closer Look At JSX [54]
### Organizing Component Files [55]
### An Alternative Function Syntax [56]
###      Quiz 1: Learning Check: React Basics, Components, Props & JSX [56]
### Module Resources [57]
### Module Introduction [66]
### Listening to Events & Working with Event Handlers [67]
###      Coding Exercise 7: Exercise: Listening to Events [67]
### How Component Functions Are Executed [68]
### Working with "State" [69]
###      Coding Exercise 8: Exercise: Working with "State" [69]
### A Closer Look at the "useState" Hook [70]
### State can be updated in many ways! [71]
### Adding Form Inputs [72]
### Listening to User Input [73]
### Working with Multiple States [74]
### Using One State Instead (And What's Better) [75]
### Updating State That Depends On The Previous State [76]
###      Coding Exercise 9: Exercise: Using State with Form Inputs [76]
###      Coding Exercise 10: Exercise: Updating State Based On Older State [76]
### Alternative: Creating A Shared Handler Function [77]
### Handling Form Submission [78]
### Adding Two-Way Binding [79]
### Child-to-Parent Component Communication (Bottom-up) [80]
### Lifting The State Up [81]
###      Assignment 2: Time to Practice: Working with Events & State [81]
### Derived / Computed State [82]
### Controlled vs Uncontrolled Components & Stateless vs Stateful Components [83]
###      Quiz 2: Learning Check: Working with Events & State [83]
### Module Resources [84]
### Module Introduction [85]
### Rendering Lists of Data [86]
###      Coding Exercise 11: Exercise: Rendering Lists of Data [86]
### Using Stateful Lists [87]
### Understanding "Keys" [88]
###      Assignment 3: Time to Practice: Working with Lists [88]
### Outputting Conditional Content [89]
###      Coding Exercise 12: Exercise: Outputting Conditional Content [89]
### Adding Conditional Return Statements [90]
###      Assignment 4: Time to Practice: Conditional Content [90]
### Demo App: Adding a Chart [91]
### Adding Dynamic Styles [92]
### Wrap Up & Next Steps [93]
### Fixing a Small Bug [94]
###      Quiz 3: Learning Check: Outputting Lists & Conditional Content [94]
### Module Resources [95]
### Module Introduction [96]
### Setting Dynamic Inline Styles [97]
###      Coding Exercise 13: Exercise: Dynamic Styles [97]
### Setting CSS Classes Dynamically [98]
###      Coding Exercise 14: Exercise: Dynamic CSS Classes [98]
### Introducing Styled Components [99]
### Styled Components & Dynamic Props [100]
### Styled Components & Media Queries [101]
### Using CSS Modules [102]
### Dynamic Styles with CSS Modules [103]
### Module Resources [104]
### Module Introduction [105]
### Understanding React Error Messages [106]
###      Coding Exercise 15: Exercise: Fix Errors [106]
### Analyzing Code Flow & Warnings [107]
### Working with Breakpoints [108]
### Using the React DevTools [109]
### Module Resources [110]
### Module Introduction [111]
### The First Practice Project & Your Tasks [112]
### Exercise Hints [113]
### Splitting the App Into Components [114]
### Handling Events [115]
### Managing State [116]
### Lifting the State Up [117]
### Outputting Results Conditionally [118]
### Adding CSS Modules [119]
### Fixing a Small Bug [120]
### Introducing the Second Project [121]
### Exercise Hints [122]
### Adding a "User" Component [123]
### Adding a re-usable "Card" Component [124]
### Adding a re-usable "Button" Component [125]
### Managing the User Input State [126]
### Adding Validation & Resetting Logic [127]
### Adding a Users List Component [128]
### Managing a List Of Users via State [129]
### Adding The "ErrorModal" Component [130]
### Managing the Error State [131]
### Module Resources [132]
### Module Introduction [133]
### JSX Limitations & Workarounds [134]
### Creating a Wrapper Component [135]
### React Fragments [136]
### Introducing React Portals [137]
### Working with Portals [138]
### Working with "ref"s [139]
### Controlled vs Uncontrolled Components [140]
### Module Resources [141]
### Module Introduction [142]
### What are "Side Effects" & Introducing useEffect [143]
### Using the useEffect() Hook [144]
### useEffect & Dependencies [145]
### What to add & Not to add as Dependencies [146]
### Using the useEffect Cleanup Function [147]
### useEffect Summary [148]
### Introducing useReducer & Reducers In General [149]
### Using the useReducer() Hook [150]
### useReducer & useEffect [151]
### Adding Nested Properties As Dependencies To useEffect [152]
### useReducer vs useState for State Management [153]
### Introducing React Context (Context API) [154]
### Using the React Context API [155]
### Tapping Into Context with the useContext Hook [156]
### Making Context Dynamic [157]
### Building & Using a Custom Context Provider Component [158]
### React Context Limitations [159]
### Learning the "Rules of Hooks" [160]
### Refactoring an Input Component [161]
### Diving into "Forward Refs" [162]
### Module Resources [163]
### Module Introduction [164]
### ing Setup [165]
### Adding a "Header" Component [166]
### Adding the "Cart" Button Component [167]
### Adding a "Meals" Component [168]
### Adding Individual Meal Items & Dising Them [169]
### Adding a Form [170]
### Fixing Form Input IDs [171]
### Working on the "Shopping Cart" Component [172]
### Adding a Modal via a React Portal [173]
### Managing Cart & Modal State [174]
### Adding a Cart Context [175]
### Using the Context [176]
### Adding a Cart Reducer [177]
### Working with Refs & Forward Refs [178]
### Outputting Cart Items [179]
### Working on a More Complex Reducer Logic [180]
### Making Items Removable [181]
### Using the useEffect Hook [182]
### Module Resources [183]
### Module Introduction [184]
### How React Really Works [185]
### Component Updates In Action [186]
### A Closer Look At Child Component Re-Evaluation [187]
### Preventing Unnecessary Re-Evaluations with React.memo() [188]
### Preventing Function Re-Creation with useCallback() [189]
### useCallback() and its Dependencies [190]
### A First Summary [191]
### A Closer Look At State & Components [192]
### Understanding State Scheduling & Batching [193]
### Optimizing with useMemo() [194]
### Module Resources [195]
### Module Introduction [196]
### What & Why [197]
### Adding a First Class-based Component [198]
### Working with State & Events [199]
### The Component Lifecycle (Class-based Components Only!) [200]
### Lifecycle Methods In Action [201]
### Class-based Components & Context [202]
### Class-based vs Functional Components: A Summary [203]
### Introducing Error Boundaries [204]
### Module Resources [205]
### Module Introduction [206]
### How To (Not) Connect To A Database [207]
### Using the Star Wars API [208]
### Our ing App & Backend [209]
### Sending a GET Request [210]
### Using async / await [211]
### Handling Loading & Data States [212]
### Handling Http Errors [213]
### Using useEffect() For Requests [214]
### Preparing The Project For The Next Steps [215]
### Sending a POST Request [216]
### Wrap Up [217]
### Module Resources [218]
### Module Introduction [219]
### What are "Custom Hooks"? [220]
### Creating a Custom React Hook Function [221]
### Using Custom Hooks [222]
### Configuring Custom Hooks [223]
### Onwards To A More Realistic Example [224]
### Building a Custom Http Hook [225]
### Using the Custom Http Hook [226]
### Adjusting the Custom Hook Logic [227]
### Using The Custom Hook In More Components [228]
### Module Resources [229]
### Module Introduction [230]
### Our ing Setup [231]
### What's So Complex About Forms? [232]
### Dealing With Form Submission & Getting User Input Values [233]
### Adding Basic Validation [234]
### Providing Validation Feedback [235]
### Handling the "was touched" State [236]
### React To Lost Focus [237]
### Refactoring & Deriving States [238]
### Managing The Overall Form Validity [239]
###      Assignment 5: Time to Practice: Forms [239]
### Adding A Custom Input Hook [240]
### Re-Using The Custom Hook [241]
### A Challenge For You! [242]
### Applying Our Hook & Knowledge To A New Form [243]
### Summary [244]
### Bonus: Using useReducer() [245]
### Module Resources [246]
### Module Introduction [247]
### Moving "Meals" Data To The Backend [248]
### Fetching Meals via Http [249]
### Handling the Loading State [250]
### Handling Errors [251]
### Adding A Checkout Form [252]
### Reading Form Values [253]
### Adding Form Validation [254]
### Submitting & Sending Cart Data [255]
### Adding Better User Feedback [256]
### Summary [257]
### Module Resources [258]
### Module Introduction [259]
### Another Look At State In React Apps [260]
### Redux vs React Context [261]
### How Redux Works [262]
### MUST READ: Redux createStore() is (not) deprecated [263]
### Exploring The Core Redux Concepts [264]
### More Redux Basics [265]
### Preparing a new Project [266]
### Creating a Redux Store for React [267]
### Providing the Store [268]
### Using Redux Data in React Components [269]
### Dispatching Actions From Inside Components [270]
### Redux with Class-based Components [271]
### Attaching Payloads to Actions [272]
### Working with Multiple State Properties [273]
### How To Work With Redux State Correctly [274]
### Redux Challenges & Introducing Redux Toolkit [275]
### Adding State Slices [276]
### Connecting Redux Toolkit State [277]
### Migrating Everything To Redux Toolkit [278]
### Working with Multiple Slices [279]
### Reading & Dispatching From A New Slice [280]
### Splitting Our Code [281]
### Summary [282]
### Module Resources [283]
### Module Introduction [284]
### Redux & Side Effects (and Asynchronous Code) [285]
### Refresher / Practice: Part 1/2 [286]
### Refresher / Practice: Part 2/2 [287]
### Redux & Async Code [288]
### Frontend Code vs Backend Code [289]
### Where To Put Our Logic [290]
### Using useEffect with Redux [291]
### A Problem with useEffect() [292]
### Handling Http States & Feedback with Redux [293]
### Using an Action Creator Thunk [294]
### Getting ed with Fetching Data [295]
### Finalizing the Fetching Logic [296]
### Exploring the Redux DevTools [297]
### Summary [298]
### Module Resources [299]
### Module Introduction [300]
### Routing: Multiple Pages in Single-Page Applications [301]
### Project Setup & Installing React Router [302]
### Defining Routes [303]
### Adding a Second Route [304]
### Exploring an Alternative Way of Defining Routes [305]
### Navigating between Pages with Links [306]
### Layouts & Nested Routes [307]
### Showing Error Pages with errorElement [308]
### Working with Navigation Links (NavLink) [309]
### Navigating Programmatically [310]
### Defining & Using Dynamic Routes [311]
### Adding Links for Dynamic Routes [312]
### Understanding Relative & Absolute Paths [313]
### Working with Index Routes [314]
### Onwards to a new Project Setup [315]
### Time to Practice: Problem [316]
### Time to Practice: Solution [317]
### Data Fetching with a loader() [318]
### Using Data From A Loader In The Route Component [319]
### More loader() Data Usage [320]
### Where Should loader() Code Be Stored? [321]
### When Are loader() Functions Executed? [322]
### Reflecting The Current Navigation State in the UI [323]
### Returning Responses in loader()s [324]
### Which Kind Of Code Goes Into loader()s? [325]
### Error Handling with Custom Errors [326]
### Extracting Error Data & Throwing Responses [327]
### The json() Utility Function [328]
### Dynamic Routes & loader()s [329]
### The useRouteLoaderData() Hook & Accessing Data From Other Routes [330]
### Planning Data Submission [331]
### Working with action() Functions [332]
### Submitting Data Programmatically [333]
### Updating the UI State Based on the Submission Status [334]
### Validating User Input & Outputting Validation Errors [335]
### Reusing Actions via Request Methods [336]
### Behind-the-Scenes Work with useFetcher() [337]
### Deferring Data Fetching with defer() [338]
### Controlling Which Data Should Be Deferred [339]
### Module Summary [340]
### Upgrading from React Router v5 [341]
### Module Resources [342]
### Old Lectures [343]
### Module Introduction [344]
### How Authentication Works [345]
### Project Setup & Route Setup [346]
### Working with Query Parameters [347]
### Implementing the Auth Action [348]
### Validating User Input & Outputting Validation Errors [349]
### Adding User Login [350]
### Attaching Auth Tokens to Outgoing Requests [351]
### Adding User Logout [352]
### Updating the UI Based on Auth Status [353]
### Important: loader()s must return null or any other value [354]
### Adding Route Protection [355]
### Adding Automatic Logout [356]
### Managing the Token Expiration [357]
### Module Resources [358]
### Module Introduction [359]
### Deployment Steps [360]
### Understanding Lazy Loading [361]
### Adding Lazy Loading [362]
### Building the Code For Production [363]
### Deployment Example [364]
### Server-side Routing & Required Configuration [365]
### Module Resources [366]
### Module Introduction [402]
### Preparing the Demo Project [403]
### Using CSS Transitions [404]
### Using CSS Animations [405]
### CSS Transition & Animations Limitations [406]
### Using ReactTransitionGroup [407]
### Using the Transition Component [408]
### Wrapping the Transition Component [409]
### Animation Timings [410]
### Transition Events [411]
### The CSSTransition Component [412]
### Customizing CSS Classnames [413]
### Animating Lists [414]
### Alternative Animation Packages [415]
### Wrap Up [416]
### Module Resources [417]
### Module Introduction [418]
### React 18 & This Section [419]
### ing Project & Why You Would Replace Redux [420]
### Alternative: Using the Context API [421]
### Toggling Favorites with the Context API [422]
### Context API Summary (and why NOT to use it instead of Redux) [423]
### Getting ed with a Custom Hook as a Store [424]
### Finishing the Store Hook [425]
### Creating a Concrete Store [426]
### Using the Custom Store [427]
### Custom Hook Store Summary [428]
### Optimizing the Custom Hook Store [429]
### Bonus: Managing Multiple State Slices with the Custom Store Hook [430]
### Wrap Up [431]
### Module Resources [432]
### Module Introduction [433]
### What & Why? [434]
### Understanding Different Kinds Of Tests [435]
### What To Test & How To Test [436]
### Understanding the Technical Setup & Involved Tools [437]
### Running a First Test [438]
### Writing Our First Test [439]
### Grouping Tests Together With Test Suites [440]
### Testing User Interaction & State [441]
### Testing Connected Components [442]
### Testing Asynchronous Code [443]
### Working With Mocks [444]
### Summary & Further Resources [445]
### Module Resources [446]
### Module Introduction [447]
### What & Why? [448]
### Installing & Using TypeScript [449]
### Exploring the Base Types [450]
### Working with Array & Object Types [451]
### Understanding Type Inference [452]
### Using Union Types [453]
### Understanding Type Aliases [454]
### Functions & Function Types [455]
### Diving Into Generics [456]
### A Closer Look At Generics [457]
### Creating a React + TypeScript Project [458]
### Working with Components & TypeScript [459]
### Working with Props & TypeScript [460]
### Adding a Data Model [461]
### Time to Practice: Exercise Time! [462]
### Form Submissions In TypeScript Projects [463]
### Working with refs & useRef [464]
### Working with "Function Props" [465]
### Managing State & TypeScript [466]
### Adding Styling [467]
### Time to Practice: Removing a Todo [468]
### The Context API & TypeScript [469]
### Summary [470]
### Bonus: Exploring tsconfig.json [471]
### Module Resources [472]
### Module Introduction [473]
### What Are React Hooks? [474]
### The ing Project [475]
### React 18 & This Section [476]
### Getting ed with useState() [477]
### More on useState() & State Updating [478]
### Array Destructuring [479]
### Multiple States [480]
### Rules of Hooks [481]
### Passing State Data Across Components [482]
###      Assignment 6: Time to Practice: Hooks Basics [482]
### Sending Http Requests [483]
### useEffect() & Loading Data [484]
### Understanding useEffect() Dependencies [485]
### More on useEffect() [486]
### What's useCallback()? [487]
### Working with Refs & useRef() [488]
### Cleaning Up with useEffect() [489]
### Deleting Ingredients [490]
### Loading Errors & State Batching [491]
### More on State Batching & State Updates [492]
### Understanding useReducer() [493]
### Using useReducer() for the Http State [494]
### Working with useContext() [495]
### Performance Optimizations with useMemo() [496]
### Getting ed with Custom Hooks [497]
### Sharing Data Between Custom Hooks & Components [498]
### Using the Custom Hook [499]
### Wrap Up [500]
### Module Resources [501]
### Module Introduction [502]
### What Is React & Why Would You Use It? [503]
### React Projects - Requirements [504]
### Creating React Projects [505]
### Out ing Project [506]
### Understanding How React Works [507]
### Building A First Custom Component [508]
### Outputting Dynamic Values [509]
### Reusing Components [510]
### Passing Data to Components with Props [511]
### CSS Styling & CSS Modules [512]
### Exercise & Another Component [513]
### Preparing the App For State Management [514]
### Adding Event Listeners [515]
### Working with State [516]
### Lifting State Up [517]
### The Special "children" Prop [518]
### State & Conditional Content [519]
### Adding a Shared Header & More State Management [520]
### Adding Form Buttons [521]
### Handling Form Submission [522]
### Updating State Based On Previous State [523]
### Outputting List Data [524]
### Adding a Backend to the React SPA [525]
### Sending a POST HTTP Request [526]
### Handling Side Effects with useEffect() [527]
### Handle Loading State [528]
### Understanding & Adding Routing [529]
### Adding Routes [530]
### Working with Layout Routes [531]
### Refactoring Route Components & More Nesting [532]
### Linking & Navigating [533]
### Data Fetching via loader()s [534]
### Submitting Data with action()s [535]
### Dynamic Routes [536]
### Module Summary [537]
### Module Resources [538]
### What Now? Next Steps You Could Take! [539]
### Explore The React Ecosystem! [540]
### Finishing Thoughts [541]
### Course Roundup [542]
### Bonus! [543]
### Old Course Content Download [544]
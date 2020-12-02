(quick note) - I have the original lifecycle method code in the main branch, and the refactor with hooks is on the "hooks" branch!


# React Lifecycle Methods  

## Stages or phases of a component

Do NOT use arrow functions to write the methods - hurts performance

### Pre-Mount
    1. constructor() - Initializes state

### Mounting
    2. getDerivedStateFromProps(props, state)
    3. render()
    4. componentDidMount() gets called after it mounts a component (after the initial render) - good for long-running and async processes

### Updating
    5. shouldComponentUpdate(nextProps, nextState)

### Unmounting
    6. componentWillUnmount()
        This method is called when a component is going to be removed from the DOM
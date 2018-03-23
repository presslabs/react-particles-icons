# React Particles icons

```
yarn add react-particles-icons
```

## Usage

Import individual icon

```
import { AddIcon } from 'react-particles-icons';

class Button extends React.Component {
    render() {
        return <div><AddIcon size={ 30 } /></div>
    }
}
```

or as single component with name attribute

```
import { Particle } from 'react-particles-icons';

class Button extends React.Component {
    render() {
        return <div><Particle name="add" size={ 30 } /></div>
    }
}
```

## Development

Build icons:
```
yarn build
```

Build demo:
```
yarn demo
```

View/modify demo:
```
yarn dev
```

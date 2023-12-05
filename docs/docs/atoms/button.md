---
sidebar_position: 2
---

# Button

Buttons allow users to perform actions and choose with a single tap.

<div align="center">
<img src="https://i.pinimg.com/550x/1b/31/7c/1b317c42cff3e28a2b5ebc05f1f0daa4.jpg" alt="gamiBrain" width="200" style={{ borderRadius: "50%"}}/>
</div>

<div align="center" style={{ marginTop: "1rem" }}>
    <a href="/"
     style={{cursor: "pointer",padding: "5px 20px", background:"#f1f1f1", borderRadius: "10px", fontSize: "15px", display:"flex", itemsCenter:"center", gap: "10px", maxWidth: "150px", color: "#494AF4"}}>
    <svg style={{ display: "flex", margin: "auto 0"}} aria-hidden="true" focusable="false" height="1em" viewBox="0 0 512 512" width="1em" class="text-lg text-[#ff4785]" tabindex="-1"><g><path d="M356.5,5.2L353.9,63c-0.1,3.2,3.7,5.2,6.3,3.2l22.6-17.1L401.9,64c2.5,1.7,5.8,0,6-3l-2.2-58.8l28.4-2.2   c14.7-1,27.3,10.8,27.3,25.6v460.8c0,14.7-12.3,26.3-26.9,25.6L91.1,496.6c-13.3-0.6-24.1-11.3-24.5-24.7l-16-422.3   c-0.8-14.2,9.9-26.3,24.1-27.1L356.2,4.7L356.5,5.2z M291,198.4c0,10,67.4,5.1,76.6-1.7c0-68.2-36.7-104.3-103.6-104.3   c-67.2,0-104.5,36.8-104.5,91.6c0,94.9,128,96.6,128,148.4c0,15-6.8,23.5-22.4,23.5c-20.5,0-28.8-10.4-27.7-46.1   c0-7.7-77.8-10.3-80.4,0c-5.7,86,47.6,110.9,108.7,110.9c59.6,0,106.1-31.7,106.1-89.1c0-101.7-130.1-99-130.1-149.3   c0-20.7,15.4-23.4,24.1-23.4c9.7,0,26.7,1.5,25.4,39.8L291,198.4z" fill="#f95572"></path></g></svg>
    <span>Storybook</span>
    </a>
</div>

- **1. Import**:
  
  To install GamiUI, run one of the following commands in your terminal:
  <br/>
  ```jsx
  import { Button } from '@gamiui/standard'
  ```

- **2. Usage**:
  
  <br/>
  ```jsx live
  function Example(props) {
    return (
      <Row gap="10px" isWrap>
        <Button>
          GamiUI
        </Button>
      </Row>
    );
  }
  ```


- **3. Sizes**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            size="xs"
          >
            GamiUI
          </Button>
          <Button
            size="sm"
          >
            GamiUI
          </Button>
          <Button
            size="md"
          >
            GamiUI
          </Button>
          <Button
            size="lg"
          >
            GamiUI
          </Button>
          <Button
            size="full"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **4. Widths**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            width="xs"
          >
            GamiUI
          </Button>
          <Button
            width="sm"
          >
            GamiUI
          </Button>
          <Button
            width="md"
          >
            GamiUI
          </Button>
          <Button
            width="lg"
          >
            GamiUI
          </Button>
          <Button
            width="full"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **5. Heights**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            height="xs"
          >
            GamiUI
          </Button>
          <Button
            height="sm"
          >
            GamiUI
          </Button>
          <Button
            height="md"
          >
            GamiUI
          </Button>
          <Button
            height="lg"
          >
            GamiUI
          </Button>
          <Button
            height="full"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **6. Rounded**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            rounded="none"
          >
            GamiUI
          </Button>
          <Button
            rounded="xs"
          >
            GamiUI
          </Button>
          <Button
            rounded="sm"
          >
            GamiUI
          </Button>
          <Button
            rounded="md"
          >
            GamiUI
          </Button>
          <Button
            rounded="lg"
          >
            GamiUI
          </Button>
          <Button
            rounded="full"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **7. Shadows**:
 
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            shadow="none"
          >
            GamiUI
          </Button>
          <Button
            shadow="xs"
          >
            GamiUI
          </Button>
          <Button
            shadow="sm"
          >
            GamiUI
          </Button>
          <Button
            shadow="md"
          >
            GamiUI
          </Button>
          <Button
            shadow="lg"
          >
            GamiUI
          </Button>
          <Button
            shadow="full"
          >
            GamiUI
          </Button>
          <Button
            shadow="primary"
          >
            GamiUI
          </Button>
          <Button
            shadow="secondary"
          >
            GamiUI
          </Button>
          <Button
            shadow="tertiary"
          >
            GamiUI
          </Button>
          <Button
            shadow="cuaternary"
          >
            GamiUI
          </Button>
          <Button
            shadow="success"
          >
            GamiUI
          </Button>
          <Button
            shadow="warning"
          >
            GamiUI
          </Button>
          <Button
            shadow="danger"
          >
            GamiUI
          </Button>
          <Button
            shadow="info"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **8. Text Align**:
 
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            textAlign="left"
            width="lg"
          >
            GamiUI
          </Button>
          <Button
            textAlign="center"
            width="lg"
          >
            GamiUI
          </Button>
          <Button
            textAlign="right"
            width="lg"
          >
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **6. Padding and margin**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button padding="10px">
            Gami Button
          </Button>
          <Container shadow="sm">
            <Button margin="10px">
              Gami Button
            </Button>
          </Container>
        </Row>
      );
    }
  ```

- **7. Font Weight**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button fontWeight="light">
            GamiUI
          </Button>
          <Button fontWeight="normal">
            GamiUI
          </Button>
          <Button fontWeight="medium">
            GamiUI
          </Button>
          <Button fontWeight="semibold">
            GamiUI
          </Button>
          <Button fontWeight="bold">
            GamiUI
          </Button>
          <Button fontWeight="extrabold">
            GamiUI
          </Button>
          <Button fontWeight="black">
            GamiUI
          </Button>
        </Row>
      );
    }
  ```

- **8. Disable**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            disable
            shadow="sm"
          >
            Gami Button
          </Button>
          <Button
            shadow="sm"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```

- **9. Variants**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            shadow="primary"
            variant="primary"
          >
            Gami Button
          </Button>
          <Button
            shadow="secondary"
            variant="secondary"
          >
            Gami Button
          </Button>
          <Button
            shadow="tertiary"
            variant="tertiary"
          >
            Gami Button
          </Button>
          <Button
            shadow="cuaternary"
            variant="cuaternary"
          >
            Gami Button
          </Button>
          <Button
            shadow="warning"
            variant="warning"
          >
            Gami Button
          </Button>
          <Button
            shadow="danger"
            variant="danger"
          >
            Gami Button
          </Button>
          <Button
            shadow="info"
            variant="info"
          >
            Gami Button
          </Button>
          <Button
            shadow="gradient"
            variant="gradient"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```

- **10. Bordered**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            bordered
            variant="primary"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="secondary"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="tertiary"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="cuaternary"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="warning"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="danger"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="info"
          >
            Gami Button
          </Button>
          <Button
            bordered
            variant="gradient"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```

- **11. Ghost**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            ghost
            variant="primary"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="secondary"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="tertiary"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="cuaternary"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="warning"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="danger"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="info"
          >
            Gami Button
          </Button>
          <Button
            ghost
            variant="gradient"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```

- **12. Light**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            light
            shadow="none"
            variant="primary"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="secondary"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="tertiary"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="cuaternary"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="warning"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="danger"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="info"
          >
            Gami Button
          </Button>
          <Button
            light
            shadow="none"
            variant="gradient"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```

- **13. Flat**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Button
            flat
            shadow="none"
            variant="primary"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="secondary"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="tertiary"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="cuaternary"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="warning"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="danger"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="info"
          >
            Gami Button
          </Button>
          <Button
            flat
            shadow="none"
            variant="gradient"
          >
            Gami Button
          </Button>
        </Row>
      );
    }
  ```


- **14. Preffix**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
            <Button
              flat
              fontWeight="semibold"
              preffix={<Icon name="edit" size="25px"/>}
              shadow="info"
              variant="info"
            >
              Gami Button
            </Button>
        </Row>
      );
    }
  ```

- **API**:

  Button Props
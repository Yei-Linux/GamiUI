---
sidebar_position: 1
---

# Avatar

The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.

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
  import { Avatar } from '@gamiui/standard'
  ```

- **2. Usage**:
  
  <br/>
  ```jsx live
  function Example(props) {
    return (
      <Row gap="10px" isWrap>
        <Avatar
          rounded="lg"
          size="md"
          src="https://i.imgur.com/vyW3w3r.png"
          zoomMode="inside"
        />
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
          <Avatar
            rounded="lg"
            size="xs"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            size="sm"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            size="md"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            size="lg"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            size="full"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
            style={{
              maxHeight: '100px',
              maxWidth: '100px'
            }}
          />
        </Row>
      );
    }
  ```

- **4. Roundeds**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Avatar
            background="#F76E11"
            rounded="none"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            background="#F76E11"
            rounded="xs"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            background="#F76E11"
            rounded="sm"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            background="#F76E11"
            rounded="md"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            background="#F76E11"
            rounded="lg"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
        </Row>
      );
    }
  ```

- **5. Shadows**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Avatar
            rounded="lg"
            shadow="none"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="xs"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="sm"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="md"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="lg"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="full"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="primary"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="secondary"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="tertiary"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="cuaternary"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="success"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="warning"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="danger"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Avatar
            rounded="lg"
            shadow="info"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
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
          <Avatar
            background="#F76E11"
            padding="10px"
            rounded="lg"
            src="https://i.imgur.com/vyW3w3r.png"
            zoomMode="inside"
          />
          <Container shadow="sm">
                <Avatar
                  background="#F76E11"
                  margin="10px"
                  rounded="lg"
                  src="https://i.imgur.com/vyW3w3r.png"
                  zoomMode="inside"
                />
          </Container>
        </Row>
      );
    }
  ```

- **7. Avatar Text**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
          <Avatar
            background="#54BAB9"
            text="Jesus"
            textColor="white"
          />
          <Avatar
            background="#54BAB9"
            text="Yei Linux"
            textColor="white"
          />
        </Row>
      );
    }
  ```

- **8. Avatar Icon**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
            <Avatar
              background="white"
              icon={<Icon name="facebook" size="25px"/>}
              shadow="md"
            />
            <Avatar
              background="white"
              icon={<Icon name="brain" size="25px"/>}
              shadow="md"
            />
        </Row>
      );
    }
  ```

- **9. Zoom Mode**:
  
  <br/>
  ```jsx live
    function Example(props) {
      return (
        <Row gap="10px" isWrap>
            <Avatar
              background="#F76E11"
              src="https://i.imgur.com/vyW3w3r.png"
              zoomMode="outside"
            />
            <Avatar
              background="#F76E11"
              src="https://i.imgur.com/vyW3w3r.png"
              zoomMode="inside"
            />
        </Row>
      );
    }
  ```

- **API**:

  Avatar Props